import { motion } from 'motion/react';
import { Award, Lock } from 'lucide-react';
import { LogoHeader } from './Logo';

const allBooths = [
  { id: '109', name: 'Interactive XR Demos', icon: '🎮' },
  { id: 'rm01', name: 'VR Experience Zone', icon: '🥽' },
  { id: 'rm02', name: 'AR Development Showcase', icon: '📱' },
  { id: 'chauhaus', name: 'Networking & Refreshments', icon: '☕' },
  { id: '124', name: 'Spatial Computing Demos', icon: '🌐' },
  { id: 'sc01', name: 'Partner Showcase', icon: '💼' },
  { id: 'sc02', name: 'Innovation Corner', icon: '💡' },
  { id: 'sc03', name: 'Tech Showcase Station', icon: '🚀' }
];

interface PassportScreenProps {
  collectedStamps: string[];
}

export function PassportScreen({ collectedStamps }: PassportScreenProps) {
  const totalBooths = allBooths.length;

  return (
    <div className="h-full w-full overflow-y-auto pb-24 pt-6 px-5">
      {/* Header */}
      <div className="mb-6">
        <LogoHeader />

        {/* Passport Title */}
        <div className="flex items-center gap-3 mt-5 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B3A62] to-[#7A2E4D] flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Passport</h1>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mb-2">
          {allBooths.map((booth, index) => (
            <motion.div
              key={booth.id}
              className={`w-2 h-2 rounded-full transition-colors ${
                collectedStamps.includes(booth.id)
                  ? 'bg-gradient-to-r from-[#8B3A62] to-[#7A2E4D]'
                  : 'bg-gray-600'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 }}
            />
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm">
          <span className="text-white font-medium">{collectedStamps.length}</span> of{' '}
          <span className="text-white font-medium">{totalBooths}</span> booths visited
        </p>
      </div>

      {/* Stamp Grid */}
      <div className="grid grid-cols-2 gap-3">
        {allBooths.map((booth, index) => {
          const isCollected = collectedStamps.includes(booth.id);

          return (
            <motion.div
              key={booth.id}
              className={`relative rounded-2xl p-5 aspect-[4/5] flex flex-col items-center justify-center transition-all ${
                isCollected
                  ? 'bg-gradient-to-br from-[#7A2E4D]/25 to-[#8B3A62]/22 border border-[#A8557A]/35 shadow-lg shadow-black/15'
                  : 'bg-gray-800/40 border border-gray-700/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {isCollected ? (
                <>
                  {/* Collected State */}
                  <motion.div
                    className="text-5xl mb-3"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.03
                    }}
                  >
                    {booth.icon}
                  </motion.div>

                  <div className="text-white font-semibold text-center text-sm">
                    {booth.name}
                  </div>

                  <div className="text-green-400 text-xs mt-1 font-medium">Collected</div>

                  {/* Checkmark */}
                  <motion.div
                    className="absolute top-3 right-3 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.03 + 0.15, type: 'spring' }}
                  >
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Not Visited State */}
                  <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center mb-3">
                    <Lock className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="text-gray-400 font-medium text-center text-sm">
                    {booth.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">Not visited</div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Completion Message */}
      {collectedStamps.length === totalBooths && (
        <motion.div
          className="mt-6 p-5 bg-gradient-to-br from-[#7A2E4D]/20 to-[#8B3A62]/16 border border-[#A8557A]/30 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-lg font-bold text-white mb-1">Passport Complete!</h3>
          <p className="text-gray-300 text-sm">
            You've visited all booths at the conference
          </p>
        </motion.div>
      )}
    </div>
  );
}
