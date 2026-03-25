import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Clock, Building2, User } from 'lucide-react';
import { Event } from '../data/eventData';
import { CameraStampCollector } from './CameraStampCollector';

interface EventDetailPageProps {
  event: Event;
  onBack: () => void;
  onCollectStamp: (boothId: string) => void;
  isStampCollected: boolean;
}

export function EventDetailPage({
  event,
  onBack,
  onCollectStamp,
  isStampCollected
}: EventDetailPageProps) {
  const [showCamera, setShowCamera] = useState(false);

  const handleCollectStamp = () => {
    // Directly collect stamp without camera for simpler UX
    const boothId = event.room.toLowerCase().replace(/\s+/g, '');
    onCollectStamp(boothId);
  };

  return (
    <motion.div
      className="absolute inset-0 z-50 overflow-y-auto"
      style={{
        background: 'linear-gradient(135deg, #2d2d4a 0%, #3d3a5c 30%, #4a4565 60%, #5d5673 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#1a1a2e]/90 backdrop-blur-xl px-6 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-6 pb-24">
        {/* Event Title */}
        <motion.h1
          className="text-2xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {event.title}
        </motion.h1>

        {/* Event Info Rows */}
        <motion.div
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Time */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#7A2E4D] flex items-center justify-center shadow-lg shadow-black/20">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-300 font-medium">Time</div>
              <div className="text-white font-medium">{event.time}</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#8B3A62] flex items-center justify-center shadow-lg shadow-black/20">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-300 font-medium">Location</div>
              <div className="text-white font-medium">{event.room}</div>
            </div>
          </div>

          {/* Company */}
          {event.company && (
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-300 font-medium">Company</div>
                <div className="text-white font-medium">{event.company}</div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-bold text-white mb-3">Description</h2>
          <p className="text-gray-200 leading-relaxed text-sm">{event.description}</p>
        </motion.div>

        {/* Speakers Section */}
        {event.speakers && event.speakers.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-bold text-white mb-4">Speakers</h2>
            <div className="space-y-3">
              {event.speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/10 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 via-[#A8557A] to-[#7A2E4D] flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/20">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {speaker.name}
                      </h3>
                      <p className="text-sm text-[#C4849E]">{speaker.title}</p>
                      {speaker.company && (
                        <p className="text-xs text-gray-400 mt-0.5">{speaker.company}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Collect Stamp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleCollectStamp}
            disabled={isStampCollected}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-base transition-all ${
              isStampCollected
                ? 'bg-green-500 text-white cursor-default shadow-lg shadow-green-500/30'
                : 'bg-gradient-to-r from-[#8B3A62] to-[#7A2E4D] text-white shadow-xl shadow-black/25 hover:shadow-2xl'
            }`}
            whileTap={!isStampCollected ? { scale: 0.98 } : {}}
          >
            {isStampCollected ? '✓ Stamp Collected' : 'Collect Stamp'}
          </motion.button>
        </motion.div>
      </div>

      {/* Camera Interface */}
      {showCamera && (
        <CameraStampCollector
          onCapture={() => {
            setShowCamera(false);
            onCollectStamp(event.room.toLowerCase().replace(/\s+/g, ''));
          }}
          onClose={() => setShowCamera(false)}
        />
      )}
    </motion.div>
  );
}
