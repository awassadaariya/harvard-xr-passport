import { motion } from 'motion/react';
import { X, Calendar } from 'lucide-react';
import { Room, Event } from '../data/eventData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getRoomImage } from '../data/imageAssets';

interface RoomEventsModalProps {
  room: Room;
  onClose: () => void;
  onCollectStamp: (boothId: string) => void;
  isStampCollected: boolean;
  onEventClick?: (event: Event) => void;
}

export function RoomEventsModal({
  room,
  onClose,
  onCollectStamp,
  isStampCollected,
  onEventClick
}: RoomEventsModalProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        className="absolute bottom-20 left-4 right-4 z-40 bg-[#1a1a2e]/98 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[70vh]"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 400, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 350 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={(_, { offset, velocity }) => {
          if (offset.y > 100 || velocity.y > 500) {
            onClose();
          }
        }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-1 absolute top-0 left-0 right-0 z-10">
          <div className="w-10 h-1 bg-white/40 rounded-full" />
        </div>

        {/* Room Image with Overlay */}
        <div className="relative h-44 bg-gradient-to-br from-[rgba(122,46,77,0.22)] to-[rgba(139,58,98,0.18)] flex items-end overflow-hidden">
          <ImageWithFallback
            src={getRoomImage(room.id)}
            alt={room.name}
            className="w-full h-full object-cover"
          />

          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/50 to-transparent" />

          {/* Room Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-6">
            <h2 className="text-xl font-bold text-white mb-1">{room.name}</h2>
            <div className="flex items-center gap-1.5 text-gray-300">
              <Calendar className="w-3.5 h-3.5" />
              <p className="text-sm">
                {room.events.length} {room.events.length === 1 ? 'event' : 'events'} today
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors z-10"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Events List */}
        <div className="overflow-y-auto max-h-[35vh]">
          {room.events.map((event, index) => (
            <motion.button
              key={event.id}
              className="w-full px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors text-left"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => onEventClick?.(event)}
            >
              <div className="flex items-start gap-4">
                <div className="text-[#C4849E] text-sm font-medium whitespace-nowrap pt-0.5 min-w-[105px]">
                  {event.time}
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-[15px] leading-snug mb-0.5">
                    {event.title}
                  </div>
                  {event.company && (
                    <div className="text-gray-400 text-xs">{event.company}</div>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Collect Stamp Button (for booths/rooms) */}
        {room.type !== 'auditorium' && (
          <div className="p-4 border-t border-white/5">
            <motion.button
              onClick={() => {
                if (!isStampCollected) {
                  onCollectStamp(room.id);
                }
              }}
              disabled={isStampCollected}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                isStampCollected
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-gradient-to-r from-[#8B3A62] to-[#7A2E4D] text-white shadow-lg shadow-black/20'
              }`}
              whileTap={!isStampCollected ? { scale: 0.98 } : {}}
            >
              {isStampCollected ? '✓ Stamp Collected' : 'Collect Stamp'}
            </motion.button>
          </div>
        )}
      </motion.div>
    </>
  );
}
