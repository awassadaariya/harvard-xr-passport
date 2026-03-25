import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveMapScreen } from './components/InteractiveMapScreen';
import { ScheduleScreen } from './components/ScheduleScreen';
import { PassportScreen } from './components/PassportScreen';
import { BottomNav } from './components/BottomNav';
import { EventDetailPage } from './components/EventDetailPage';
import { VotingPage } from './components/VotingPage';
import { ProfilePage } from './components/ProfilePage';
import { RoomEventsModal } from './components/RoomEventsModal';
import { Event, getRoomById } from './data/eventData';
import harvardBg from '../imports/harvard_bg.jpg';

type Screen = 'map' | 'schedule' | 'passport';
type Page = 'main' | 'event' | 'voting' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('map');
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [collectedStamps, setCollectedStamps] = useState<string[]>([]);
  const [selectedVote, setSelectedVote] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const handleCollectStamp = (boothId: string) => {
    if (!collectedStamps.includes(boothId)) {
      setCollectedStamps([...collectedStamps, boothId]);
    }
  };

  const handleVote = (projectId: string) => {
    if (selectedVote === projectId) {
      setSelectedVote(null);
    } else {
      setSelectedVote(projectId);
    }
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentPage('event');
  };

  const handleEventBack = () => {
    setCurrentPage('main');
    setSelectedEvent(null);
  };

  const handleNavigateToVoting = () => {
    setCurrentPage('voting');
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a1a2e]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${harvardBg})`
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Container - Phone Frame */}
      <div className="relative h-full w-full max-w-[430px] mx-auto border-x border-white/20 bg-gradient-to-b from-transparent to-purple-900/5">
        <AnimatePresence mode="wait">
          {currentPage === 'main' && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <AnimatePresence mode="wait">
                {currentScreen === 'map' && (
                  <motion.div
                    key="map"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <InteractiveMapScreen
                      onCollectStamp={handleCollectStamp}
                      collectedStamps={collectedStamps}
                      onNavigateToVoting={handleNavigateToVoting}
                      onNavigateToProfile={handleNavigateToProfile}
                      onEventClick={handleEventClick}
                    />
                  </motion.div>
                )}

                {currentScreen === 'schedule' && (
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <ScheduleScreen onEventClick={handleEventClick} />
                  </motion.div>
                )}

                {currentScreen === 'passport' && (
                  <motion.div
                    key="passport"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <PassportScreen collectedStamps={collectedStamps} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Navigation */}
              <BottomNav currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
            </motion.div>
          )}

          {currentPage === 'event' && selectedEvent && (
            <EventDetailPage
              key="event"
              event={selectedEvent}
              onBack={handleEventBack}
              onCollectStamp={handleCollectStamp}
              isStampCollected={collectedStamps.includes(
                selectedEvent.room.toLowerCase().replace(/\s+/g, '')
              )}
            />
          )}

          {currentPage === 'voting' && (
            <VotingPage
              key="voting"
              onBack={handleBackToMain}
              selectedVote={selectedVote}
              onVote={handleVote}
            />
          )}

          {currentPage === 'profile' && (
            <ProfilePage
              key="profile"
              onBack={handleBackToMain}
              collectedStamps={collectedStamps}
              selectedVote={selectedVote}
              onNavigateToVoting={handleNavigateToVoting}
            />
          )}
        </AnimatePresence>

        {/* Room Events Modal (for map screen) */}
        <AnimatePresence>
          {currentPage === 'main' && currentScreen === 'map' && selectedRoomId && (
            <RoomEventsModal
              room={getRoomById(selectedRoomId)!}
              onClose={() => setSelectedRoomId(null)}
              onCollectStamp={handleCollectStamp}
              isStampCollected={collectedStamps.includes(selectedRoomId)}
              onEventClick={handleEventClick}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}