import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X } from 'lucide-react';
import { StampAnimation } from './StampAnimation';

interface CameraStampCollectorProps {
  onCapture: () => void;
  onClose: () => void;
}

export function CameraStampCollector({ onCapture, onClose }: CameraStampCollectorProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleCapture = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      onCapture();
    }, 1500);
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Camera Interface */}
        <div className="relative w-full h-full flex flex-col">
          {/* Camera Viewfinder */}
          <div className="flex-1 relative bg-gray-900 flex items-center justify-center overflow-hidden">
            {/* Simulated camera view with grid overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
              {/* Grid overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Target Frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 border-2 border-purple-500 rounded-2xl relative"
                  animate={{
                    scale: [1, 1.05, 1],
                    borderColor: ['#a855f7', '#ec4899', '#a855f7']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Corner markers */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-2xl" />

                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white text-sm font-medium">
                        Position booth stamp<br />within frame
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Instructions */}
            <div className="absolute top-6 left-6 right-20">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/20 px-4 py-3">
                <p className="text-white text-sm">
                  📸 Capture the physical booth stamp to add it to your passport
                </p>
              </div>
            </div>
          </div>

          {/* Capture Button */}
          <div className="bg-black/90 backdrop-blur-xl px-6 py-8 flex items-center justify-center border-t border-white/10">
            <motion.button
              onClick={handleCapture}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 rounded-full border-4 border-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stamp Animation */}
      <AnimatePresence>
        {showAnimation && <StampAnimation />}
      </AnimatePresence>
    </>
  );
}
