import { useState } from 'react';
import { motion } from 'motion/react';
import mapSvg from '../../imports/map.svg';

interface SVGFloorMapProps {
  onRoomClick: (roomId: string) => void;
  highlightedRoomId: string | null;
}

// Room clickable regions using exact SVG coordinates from the design reference
// SVG viewBox is 393x623
const rooms = [
  { id: '109', name: '109', cx: 123.52, cy: 70.14, renderSvg: () => (
      <rect x="90.1638" y="106.924" width="73.5705" height="66.7082" transform="rotate(-90 90.1638 106.924)" fill="#94B3ED" />
  )},
  { id: 'piper', name: 'Room 01', cx: 284.9, cy: 97.9, renderSvg: () => (
      <path d="M218.314 34.2029H351.513V161.688H322.938V198.172H218.314V34.2029Z" fill="#F398C0" />
  )},
  { id: 'rm01', name: 'Room 02', cx: 84.92, cy: 204.06, renderSvg: () => (
      <rect x="37.0216" y="262.078" width="116.04" height="95.7944" transform="rotate(-90 37.0216 262.078)" fill="#F398C0" />
  )},
  { id: 'rm02', name: 'Room 03', cx: 69.00, cy: 318.65, renderSvg: () => (
      <rect x="36.8704" y="375.229" width="113.164" height="64.2656" transform="rotate(-90 36.8704 375.229)" fill="#F398C0" />
  )},
  { id: 'chauhaus', name: 'Chauhaus', cx: 63.26, cy: 430.72, renderSvg: () => (
      <rect x="25.3956" y="486.224" width="110.994" height="75.7232" transform="rotate(-90 25.3956 486.224)" fill="#F9CBDF" />
  )},
  { id: '124', name: '124', cx: 254.16, cy: 525.68, renderSvg: () => (
      <rect x="204.894" y="549.655" width="47.9294" height="98.5313" transform="rotate(-90 204.894 549.655)" fill="#CAD9F6" />
  )},
  { id: 'sc01', name: 'showcase\n01', cx: 128.68, cy: 595.60, renderSvg: () => (
      <rect x="99.9914" y="623" width="54.7954" height="57.38" transform="rotate(-90 99.9914 623)" fill="#94B3ED" />
  )},
  { id: 'sc02', name: 'showcase\n02', cx: 194.09, cy: 595.60, renderSvg: () => (
      <rect x="157.369" y="623" width="54.7954" height="73.4464" transform="rotate(-90 157.369 623)" fill="#94B3ED" />
  )},
  { id: 'sc03', name: 'showcase\n03', cx: 258.36, cy: 586.07, renderSvg: () => (
      <rect x="230.818" y="623" width="73.8547" height="55.0848" transform="rotate(-90 230.818 623)" fill="#94B3ED" />
  )}
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
        <svg viewBox="0 0 393 623" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
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
                  fill="black"
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
