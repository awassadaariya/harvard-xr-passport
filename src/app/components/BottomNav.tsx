import { motion } from 'motion/react';
import { Map, Calendar, Stamp } from 'lucide-react';

type Screen = 'map' | 'schedule' | 'passport';

interface BottomNavProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

const navItems = [
  { id: 'map' as Screen, label: 'MAP', icon: Map },
  { id: 'schedule' as Screen, label: 'SCHEDULE', icon: Calendar },
  { id: 'passport' as Screen, label: 'PASSPORT', icon: Stamp }
];

export function BottomNav({ currentScreen, onScreenChange }: BottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4">
      <div className="bg-[#1a1a2e]/95 backdrop-blur-xl rounded-[2rem] border border-[#8B3A62]/25 shadow-[0_-4px_30px_rgba(139,58,98,0.12)] overflow-hidden">
        <div className="flex items-center justify-around p-1.5">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                onClick={() => onScreenChange(item.id)}
                className="relative flex-1 flex flex-col items-center justify-center py-3 px-3 rounded-2xl transition-all"
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-1 rounded-2xl border border-[#A8557A]/40"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 58, 98, 0.35) 0%, rgba(122, 46, 77, 0.35) 100%)',
                      boxShadow: '0 0 10px rgba(139, 58, 98, 0.16), inset 0 1px 0 rgba(255,255,255,0.04)'
                    }}
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <motion.div
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Icon
                    className={`w-5 h-5 mb-1 transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                  />
                </motion.div>

                <span
                  className={`text-[10px] tracking-wider font-semibold relative z-10 transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
