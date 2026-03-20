import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';
import { LogoHeader } from './Logo';
import { allSchedule, Event } from '../data/eventData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getEventImage } from '../data/imageAssets';

interface ScheduleScreenProps {
  onEventClick?: (event: Event) => void;
}

// Filter and sort schedule by time
const morningEvents = allSchedule.filter(event => {
  const timeStr = event.time.toLowerCase();
  const hour = parseInt(event.time.split(':')[0]);
  if (timeStr.includes('pm') && hour !== 12) return false;
  return hour >= 9 && hour < 12;
});

const afternoonEvents = allSchedule.filter(event => {
  const timeStr = event.time.toLowerCase();
  const hour = parseInt(event.time.split(':')[0]);
  if (timeStr.includes('am') && hour !== 12) return false;
  return (hour >= 12 && hour < 5) || (timeStr.includes('pm') && hour >= 1 && hour < 5);
});

const scheduleData = [
  {
    timeBlock: '9:00 AM - 12:00 PM',
    items: morningEvents
  },
  {
    timeBlock: '12:00 PM - 5:00 PM',
    items: afternoonEvents
  }
].filter(block => block.items.length > 0);

export function ScheduleScreen({ onEventClick }: ScheduleScreenProps) {
  return (
    <div className="h-full w-full overflow-y-auto pb-24 pt-5 px-5">
      {/* Header */}
      <div className="mb-5">
        <LogoHeader />
        <h1 className="text-2xl font-bold text-white mt-4 mb-1">Schedule</h1>
        <p className="text-gray-400 text-sm">
          Full Conference Timeline
        </p>
      </div>

      {/* Schedule Blocks */}
      {scheduleData.map((block, blockIndex) => (
        <motion.div
          key={blockIndex}
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: blockIndex * 0.1 }}
        >
          {/* Time Block Header */}
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-pink-400" />
            <h2 className="text-base font-semibold text-white">{block.timeBlock}</h2>
          </div>

          {/* Event Cards */}
          <div className="space-y-4">
            {block.items.map((event, itemIndex) => (
              <motion.div
                key={event.id}
                className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: blockIndex * 0.1 + itemIndex * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onEventClick?.(event)}
              >
                {/* Event Image */}
                <div className="relative h-40 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={getEventImage(event.id)}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                  {/* Time Badge */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5 border border-white/10">
                    <Clock className="w-3 h-3 text-purple-300" />
                    <span className="text-white text-[11px] font-medium">{event.time}</span>
                  </div>

                  {/* Room Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5 border border-white/10">
                    <MapPin className="w-3 h-3 text-pink-300" />
                    <span className="text-white text-[11px] font-medium">{event.room}</span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1 leading-snug">{event.title}</h3>

                  {/* Speaker/Company */}
                  {(event.speakers && event.speakers.length > 0) || event.company ? (
                    <div className="text-purple-400 text-sm font-medium mb-2">
                      {event.speakers && event.speakers.length > 0 ? (
                        <>
                          {event.speakers[0].name}
                          {event.speakers[0].company && (
                            <span className="text-gray-400"> · {event.speakers[0].company}</span>
                          )}
                        </>
                      ) : (
                        event.company
                      )}
                    </div>
                  ) : null}

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
