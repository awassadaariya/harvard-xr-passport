import { useState } from 'react';
import { motion } from 'motion/react';

interface InteractiveFloorMapProps {
  onRoomClick: (roomId: string) => void;
  highlightedRoomId: string | null;
}

// Room data matching the reference layout
const rooms = [
  // Top row - 109
  {
    id: '109',
    name: '109',
    x: '15%',
    y: '12%',
    width: '20%',
    height: '18%',
    bgColor: 'rgba(90, 100, 120, 0.75)',
    borderColor: 'rgba(120, 130, 150, 0.8)'
  },
  // Piper Auditorium - large room on right
  {
    id: 'piper',
    name: 'Piper',
    x: '55%',
    y: '10%',
    width: '38%',
    height: '30%',
    bgColor: 'rgba(140, 110, 140, 0.7)',
    borderColor: 'rgba(170, 140, 170, 0.8)'
  },

  // Left column - RM 01
  {
    id: 'rm01',
    name: 'RM 01',
    x: '5%',
    y: '32%',
    width: '28%',
    height: '18%',
    bgColor: 'rgba(140, 110, 140, 0.7)',
    borderColor: 'rgba(170, 140, 170, 0.8)'
  },
  // RM 02
  {
    id: 'rm02',
    name: 'RM02',
    x: '5%',
    y: '52%',
    width: '22%',
    height: '16%',
    bgColor: 'rgba(140, 110, 140, 0.65)',
    borderColor: 'rgba(170, 140, 170, 0.75)'
  },
  // Chauhaus
  {
    id: 'chauhaus',
    name: 'Chauhaus',
    x: '2%',
    y: '70%',
    width: '20%',
    height: '16%',
    bgColor: 'rgba(120, 100, 120, 0.65)',
    borderColor: 'rgba(150, 130, 150, 0.75)'
  },

  // Room 124 - bottom right area
  {
    id: '124',
    name: '124',
    x: '50%',
    y: '74%',
    width: '28%',
    height: '12%',
    bgColor: 'rgba(100, 110, 130, 0.75)',
    borderColor: 'rgba(130, 140, 160, 0.8)'
  },

  // Bottom row - SC booths
  {
    id: 'sc01',
    name: 'SC 01',
    x: '22%',
    y: '88%',
    width: '16%',
    height: '9%',
    bgColor: 'rgba(100, 110, 130, 0.7)',
    borderColor: 'rgba(130, 140, 160, 0.75)'
  },
  {
    id: 'sc02',
    name: 'SC 02',
    x: '39%',
    y: '88%',
    width: '16%',
    height: '9%',
    bgColor: 'rgba(100, 110, 130, 0.7)',
    borderColor: 'rgba(130, 140, 160, 0.75)'
  },
  {
    id: 'sc03',
    name: 'SC 03',
    x: '56%',
    y: '88%',
    width: '16%',
    height: '9%',
    bgColor: 'rgba(100, 110, 130, 0.7)',
    borderColor: 'rgba(130, 140, 160, 0.75)'
  }
];

// Entry indicators
const entries = [
  { name: 'Cambridge St\nEntry', x: '42%', y: '6%', icon: '▼' },
  { name: 'Quincy\nEntry', x: '92%', y: '50%', icon: '◄' }
];

export function InteractiveFloorMap({ onRoomClick, highlightedRoomId }: InteractiveFloorMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#151525]">
      {/* Dark background with star pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }}
      />

      {/* Map Container */}
      <div className="relative w-full h-full p-3">
        {/* Entry Indicators */}
        {entries.map((entry, idx) => (
          <div
            key={idx}
            className="absolute text-white/70 text-center text-[9px] whitespace-pre-line font-medium"
            style={{
              left: entry.x,
              top: entry.y,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          >
            <div className="text-sm mb-0.5 text-white/50">{entry.icon}</div>
            <div className="leading-tight">{entry.name}</div>
          </div>
        ))}

        {/* Interactive Room Buttons */}
        {rooms.map((room) => {
          const isHighlighted = highlightedRoomId === room.id || hoveredId === room.id;

          return (
            <motion.button
              key={room.id}
              className="absolute flex items-center justify-center"
              style={{
                left: room.x,
                top: room.y,
                width: room.width,
                height: room.height,
                backgroundColor: isHighlighted
                  ? 'rgba(167, 139, 250, 0.5)'
                  : room.bgColor,
                border: `2px solid ${isHighlighted ? 'rgba(167, 139, 250, 0.9)' : room.borderColor}`,
                borderRadius: '10px',
                boxShadow: isHighlighted
                  ? '0 0 20px rgba(167, 139, 250, 0.6), inset 0 1px 2px rgba(255,255,255,0.1)'
                  : '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.08)',
                transition: 'all 0.15s ease'
              }}
              onClick={() => onRoomClick(room.id)}
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileTap={{ scale: 0.97 }}
            >
              {/* Room Label */}
              <span
                className="text-white font-semibold"
                style={{
                  textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                  fontSize: room.id.includes('sc') || room.id === '124' ? '10px' : room.id === 'chauhaus' ? '11px' : '13px'
                }}
              >
                {room.name}
              </span>

              {/* Pulse effect when highlighted */}
              {isHighlighted && (
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-purple-400/60"
                  style={{ pointerEvents: 'none' }}
                  initial={{ opacity: 0.7, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
