import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Heart } from 'lucide-react';
import { projects } from '../data/votingData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VotingPageProps {
  onBack: () => void;
  selectedVote: string | null;
  onVote: (projectId: string) => void;
}

export function VotingPage({ onBack, selectedVote, onVote }: VotingPageProps) {
  const [votingAnimation, setVotingAnimation] = useState<string | null>(null);

  const handleVote = (projectId: string) => {
    setVotingAnimation(projectId);
    setTimeout(() => {
      onVote(projectId);
      setVotingAnimation(null);
    }, 300);
  };

  const isVoted = (projectId: string) => selectedVote === projectId;

  return (
    <motion.div
      className="absolute inset-0 z-50 overflow-y-auto"
      style={{ background: 'linear-gradient(135deg, #111827 0%, rgba(122, 46, 77, 0.15) 50%, rgba(139, 58, 98, 0.12) 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-white">Vote for Best Showcase</h1>
        <p className="text-gray-400 text-sm mt-1">
          Vote for your favorite projects. You can change your vote anytime.
        </p>
      </div>

      {/* Projects List */}
      <div className="px-6 py-6 pb-24 space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {/* Project Image */}
            <div className="relative h-40 bg-gradient-to-br from-[rgba(122,46,77,0.22)] to-[rgba(139,58,98,0.18)] flex items-center justify-center overflow-hidden">
              <ImageWithFallback
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-[#C4849E] text-sm font-medium mb-2">{project.team}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Vote Button */}
              <motion.button
                onClick={() => handleVote(project.id)}
                className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  isVoted(project.id)
                    ? 'bg-gradient-to-r from-[#8B3A62] to-[#7A2E4D] text-white shadow-lg shadow-black/20'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {votingAnimation === project.id ? (
                    <motion.div
                      key="animating"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                    >
                      <Heart className="w-5 h-5 fill-current" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="static"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      <Heart className={`w-5 h-5 ${isVoted(project.id) ? 'fill-current' : ''}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
                {isVoted(project.id) ? 'Voted' : 'Vote'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
