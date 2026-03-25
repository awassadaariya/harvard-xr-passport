import { useState } from 'react';
import { motion } from 'motion/react';
import mapSvg from '../../../assets/map.svg';

interface SVGFloorMapProps {
  onRoomClick: (roomId: string) => void;
  highlightedRoomId: string | null;
}

// Room clickable regions using exact SVG coordinates from the design reference
// SVG viewBox is 359x545 (updated from assets/map.svg)
const rooms = [
  {
    id: '109', name: '109', cx: 112.8, cy: 61.2, renderSvg: () => (
      <rect x="82.6284" y="93.3656" width="64.2414" height="60.4625" transform="rotate(-90 82.6284 93.3656)" fill="#3B4165" />
    )
  },
  {
    id: 'piper', name: 'Room 01', cx: 259.1, cy: 101.5, renderSvg: () => (
      <path d="M198.78 29.8657H319.508V141.185H293.608V173.043H198.78V29.8657Z" fill="#5D425F" />
    )
  },
  {
    id: 'rm01', name: 'Room 02', cx: 77.9, cy: 178.2, renderSvg: () => (
      <rect x="34.4619" y="228.845" width="101.325" height="86.8254" transform="rotate(-90 34.4619 228.845)" fill="#673E5D" />
    )
  },
  {
    id: 'rm02', name: 'Room 03', cx: 63.4, cy: 278.2, renderSvg: () => (
      <rect x="34.3247" y="327.648" width="98.8145" height="58.2486" transform="rotate(-90 34.3247 327.648)" fill="#5C3854" />
    )
  },
  {
    id: 'chauhaus', name: 'Chauhaus', cx: 58.2, cy: 376.1, renderSvg: () => (
      <rect x="23.9243" y="424.568" width="96.9197" height="68.6334" transform="rotate(-90 23.9243 424.568)" fill="#805F74" />
    )
  },
  {
    id: '124', name: '124', cx: 231.3, cy: 459.0, renderSvg: () => (
      <rect x="186.616" y="479.955" width="41.8517" height="89.3061" transform="rotate(-90 186.616 479.955)" fill="#777590" />
    )
  },
  {
    id: 'sc01', name: 'showcase\n01', cx: 117.5, cy: 520.1, renderSvg: () => (
      <rect x="91.5361" y="544" width="47.847" height="52.0077" transform="rotate(-90 91.5361 544)" fill="#64698D" />
    )
  },
  {
    id: 'sc02', name: 'showcase\n02', cx: 176.8, cy: 520.1, renderSvg: () => (
      <rect x="143.542" y="544" width="47.847" height="66.5698" transform="rotate(-90 143.542 544)" fill="#60698E" />
    )
  },
  {
    id: 'sc03', name: 'showcase\n03', cx: 235.1, cy: 511.8, renderSvg: () => (
      <rect x="210.113" y="544" width="64.4895" height="49.9273" transform="rotate(-90 210.113 544)" fill="#5A6186" />
    )
  }
];

export function SVGFloorMap({ onRoomClick, highlightedRoomId }: SVGFloorMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full">
      {/* SVG Map Background */}
      <img
        src={mapSvg}
        alt="Floor Map"
        className="w-full h-full object-contain"
        style={{ pointerEvents: 'none', opacity: 1 }}
      />

      {/* Interactive Precise Overlays */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 359 545" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {rooms.map((room) => {
            const isHighlighted = highlightedRoomId === room.id;
            const isHovered = hoveredId === room.id;
            const isActive = isHighlighted || isHovered;

            return (
              <motion.g
                key={room.id}
                className="cursor-pointer"
                onClick={() => onRoomClick(room.id)}
                onMouseEnter={() => setHoveredId(room.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  transformOrigin: `${room.cx}px ${room.cy}px`
                }}
              >
                {/* 
                  Drop shadow filter and active state
                  The base shapes match the bright solid colors from the design reference.
                */}
                <g style={{
                  filter: isActive
                    ? 'drop-shadow(0px 0px 8px rgba(255,255,255,0.6)) brightness(1.15)'
                    : 'drop-shadow(3px 3px 6px rgba(0,0,0,0.4))',
                  transition: 'all 0.2s ease'
                }}>
                  {room.renderSvg()}

                  {/* Pulse effect when highlighted */}
                  {isHighlighted && (
                    <motion.rect
                      x={room.cx - 50}
                      y={room.cy - 50}
                      width={100}
                      height={100}
                      fill="url(#pulse-gradient)"
                      initial={{ opacity: 0.5, scale: 0.8 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ pointerEvents: 'none', mixBlendMode: 'overlay' }}
                    />
                  )}
                </g>

                {/* Text Label Overlay inside SVG */}
                <text
                  x={room.cx}
                  y={room.cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="Inter, sans-serif"
                  fill="white"
                  style={{ pointerEvents: 'none', letterSpacing: '-0.3px' }}
                >
                  {room.name.split('\n').map((line, i, arr) => (
                    <tspan
                      key={i}
                      x={room.cx}
                      dy={i === 0 && arr.length > 1 ? '-0.6em' : (i > 0 ? '1.2em' : '0')}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </motion.g>
            );
          })}

          <defs>
            <radialGradient id="pulse-gradient">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
