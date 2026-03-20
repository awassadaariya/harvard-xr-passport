import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Settings, Award } from 'lucide-react';
import { LogoHeader } from './Logo';
import { SVGFloorMap } from './SVGFloorMap';
import { RoomEventsModal } from './RoomEventsModal';
import { getRoomById, Event } from '../data/eventData';

interface InteractiveMapScreenProps {
  onCollectStamp: (boothId: string) => void;
  collectedStamps: string[];
  onNavigateToVoting: () => void;
  onNavigateToProfile: () => void;
  onEventClick?: (event: Event) => void;
}

export function InteractiveMapScreen({
  onCollectStamp,
  collectedStamps,
  onNavigateToVoting,
  onNavigateToProfile,
  onEventClick
}: InteractiveMapScreenProps) {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleRegionClick = (regionId: string) => {
    setHighlightedId(regionId);
    setSelectedRoomId(regionId);
  };

  const selectedRoom = selectedRoomId ? getRoomById(selectedRoomId) : null;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 px-5 pt-5 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <LogoHeader showTitle={false} />
          </div>
          <div className="flex gap-2 mt-1">
            <button
              onClick={onNavigateToVoting}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors bg-white/5"
            >
              <Award className="w-4 h-4 text-white/70" />
            </button>
            <button
              onClick={onNavigateToProfile}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors bg-white/5"
            >
              <Settings className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>
      </div>

      {/* Map Container - Full height */}
      <div className="absolute inset-0 pt-20 pb-20">
        <SVGFloorMap
          onRoomClick={handleRegionClick}
          highlightedRoomId={highlightedId}
        />
      </div>

      {/* Room Events Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <RoomEventsModal
            room={selectedRoom}
            onClose={() => {
              setSelectedRoomId(null);
              setHighlightedId(null);
            }}
            onCollectStamp={onCollectStamp}
            isStampCollected={collectedStamps.includes(selectedRoom.id)}
            onEventClick={onEventClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
