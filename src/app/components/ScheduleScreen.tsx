import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';
import { LogoHeader } from './Logo';
import { allSchedule, Event } from '../data/eventData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getEventImage } from '../data/imageAssets';

interface ScheduleScreenProps {
  onEventClick?: (event: Event) => void;
}

type TabId = 'all' | 'room01' | 'room02' | 'demo';

const tabs: { id: TabId; label: string }[] = [
  { id: 'all', label: 'Overall Schedule' },
  { id: 'room01', label: 'Events 01' },
  { id: 'room02', label: 'Events 02' },
  { id: 'demo', label: 'Demo Booth' },
];

// Demo booth rooms (SC 01, SC 02, SC 03, etc.)
const demoBoothRooms = ['SC 01', 'SC 02', 'SC 03'];

function filterEventsByTab(events: Event[], tabId: TabId): Event[] {
  switch (tabId) {
    case 'room01':
      return events.filter(e => e.room === 'RM 01');
    case 'room02':
      return events.filter(e => e.room === 'RM 02');
    case 'demo':
      return events.filter(e => demoBoothRooms.includes(e.room));
    case 'all':
    default:
      return events;
  }
}

function groupEventsByTime(events: Event[]) {
  const morningEvents = events.filter(event => {
    const timeStr = event.time.toLowerCase();
    const hour = parseInt(event.time.split(':')[0]);
    if (timeStr.includes('pm') && hour !== 12) return false;
    return hour >= 9 && hour < 12;
  });

  const afternoonEvents = events.filter(event => {
    const timeStr = event.time.toLowerCase();
    const hour = parseInt(event.time.split(':')[0]);
    if (timeStr.includes('am') && hour !== 12) return false;
    return (hour >= 12 && hour < 5) || (timeStr.includes('pm') && hour >= 1 && hour < 5);
  });

  return [
    { timeBlock: '9:00 AM - 12:00 PM', items: morningEvents },
    { timeBlock: '12:00 PM - 5:00 PM', items: afternoonEvents }
  ].filter(block => block.items.length > 0);
}

export function ScheduleScreen({ onEventClick }: ScheduleScreenProps) {
  const [activeTab, setActiveTab] = useState<TabId>('all');

  const filteredEvents = useMemo(() =>
    filterEventsByTab(allSchedule, activeTab),
    [activeTab]
  );

  const scheduleData = useMemo(() =>
    groupEventsByTime(filteredEvents),
    [filteredEvents]
  );
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

      {/* Room Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'text-white shadow-lg'
                : 'bg-gray-800/60 text-gray-300 border border-white/10 hover:bg-gray-700/60'
            }`}
            style={activeTab === tab.id ? {
              background: 'linear-gradient(135deg, #8B3A62 0%, #7A2E4D 100%)',
              boxShadow: '0 10px 15px -3px rgba(139, 58, 98, 0.2)'
            } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Empty State */}
      {scheduleData.length === 0 && (
        <motion.div
          className="flex flex-col items-center justify-center py-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <MapPin className="w-12 h-12 text-gray-600 mb-4" />
          <p className="text-gray-400 text-sm">No sessions in this room</p>
        </motion.div>
      )}

      {/* Schedule Blocks */}
      {scheduleData.map((block, blockIndex) => (
        <motion.div
          key={`${activeTab}-${blockIndex}`}
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: blockIndex * 0.1 }}
        >
          {/* Time Block Header */}
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4" style={{ color: '#A8557A' }} />
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
                <div className="relative h-40 flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(122, 46, 77, 0.3) 0%, rgba(139, 58, 98, 0.25) 100%)' }}>
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
                    <MapPin className="w-3 h-3" style={{ color: '#C4849E' }} />
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
