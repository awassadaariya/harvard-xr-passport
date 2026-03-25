import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Award, Heart, LogOut, Trophy, Sparkles } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
  collectedStamps: string[];
  selectedVote: string | null;
  onNavigateToVoting: () => void;
}

export function ProfilePage({ onBack, collectedStamps, selectedVote, onNavigateToVoting }: ProfilePageProps) {
  const totalStamps = 8;
  const stampProgress = (collectedStamps.length / totalStamps) * 100;
  const hasVoted = selectedVote !== null;

  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#2a1d26]/40 to-[#3a1f2d]/35 z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-[#C4849E] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-8 pb-24 space-y-6">
        {/* Hero Profile Card */}
        <motion.div
          className="relative bg-gradient-to-br from-[#7A2E4D]/45 via-[#8B3A62]/30 to-[#7A2E4D]/45 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative p-8">
            {/* Profile Avatar */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 via-[#A8557A] to-[#7A2E4D] flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                  <User className="w-12 h-12 text-white" />
                </div>
                {/* Achievement badge */}
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-1.5 shadow-xl border-2 border-gray-900">
                  <Trophy className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-white mb-1 text-center">Alex Johnson</h1>
              <p className="text-[#E7CAD8] text-sm mb-4">Conference Attendee</p>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-2 text-white/90 bg-white/10 rounded-xl py-3 px-4">
              <Mail className="w-4 h-4" />
              <span className="text-sm">alex.johnson@email.com</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Your Activity</h2>
            <Sparkles className="w-5 h-5 text-[#A8557A]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Stamps Card */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center mb-3 border border-purple-500/30">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-3xl font-bold text-white mb-1">{collectedStamps.length}</span>
                <p className="text-gray-400 text-xs font-medium">Stamps Collected</p>
                <div className="w-full mt-3 bg-gray-700/50 rounded-full h-1 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#8B3A62] to-[#A8557A]"
                    initial={{ width: 0 }}
                    animate={{ width: `${stampProgress}%` }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Votes Card */}
            <motion.button
              onClick={onNavigateToVoting}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-xl text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B3A62]/30 to-[#7A2E4D]/30 flex items-center justify-center mb-3 border border-[#A8557A]/30">
                  <Heart className="w-6 h-6 text-[#C4849E]" />
                </div>
                <span className="text-3xl font-bold text-white mb-1">{hasVoted ? 1 : 0}</span>
                <p className="text-gray-400 text-xs font-medium">Projects Voted</p>
                <p className="text-[#C4849E] text-xs mt-2 font-medium">
                  {hasVoted ? 'Change vote' : 'Start voting!'}
                </p>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Logout Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="w-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-4 flex items-center justify-center gap-3 hover:border-red-500/30 hover:bg-red-500/10 transition-all shadow-lg">
            <LogOut className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Sign Out</span>
          </button>
        </motion.div>

        {/* App Version */}
        <motion.div
          className="text-center pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-xs">
            v1.0.0
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
