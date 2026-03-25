import { motion } from 'motion/react';

export function StampAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: [0, 1.5, 1], rotate: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, times: [0, 0.6, 1] }}
      >
        {/* Stamp Circle */}
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B3A62] to-[#7A2E4D] flex items-center justify-center shadow-2xl shadow-black/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-white text-4xl font-bold">✓</div>
        </motion.div>

        {/* Ink Splatter Effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#C4849E]"
            style={{
              x: '-50%',
              y: '-50%',
            }}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((i * Math.PI * 2) / 8) * 60,
              y: Math.sin((i * Math.PI * 2) / 8) * 60,
              opacity: [1, 0.5, 0],
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        ))}

        {/* Success Text */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white font-bold text-lg whitespace-nowrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Stamp Collected!
        </motion.div>
      </motion.div>
    </div>
  );
}
