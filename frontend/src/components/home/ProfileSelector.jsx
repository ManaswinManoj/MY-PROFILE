import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Users, Sparkles } from 'lucide-react';
import usePortfolioStore from '@/store/portfolioStore';
import { profiles } from '@/data/portfolioData';

const iconMap = {
  Briefcase: Briefcase,
  Code: Code,
  Users: Users,
  Sparkles: Sparkles
};

export const ProfileSelector = ({ onSelectProfile }) => {
  const setSelectedProfile = usePortfolioStore((state) => state.setSelectedProfile);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    if (onSelectProfile) {
      onSelectProfile(profile);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-8">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-radial from-neutral-900 via-background to-background opacity-50" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-wide">
          Who&apos;s Watching?
        </h1>
      </motion.div>

      {/* Profile Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl"
      >
        {profiles.map((profile, index) => {
          const IconComponent = iconMap[profile.icon];
          
          return (
            <motion.button
              key={profile.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProfileSelect(profile)}
              className="group flex flex-col items-center gap-3 focus:outline-none"
            >
              {/* Profile Avatar */}
              <div 
                className={`relative w-32 h-32 sm:w-44 sm:h-44 rounded-lg bg-gradient-to-br ${profile.bgClass} 
                  flex items-center justify-center overflow-hidden
                  transition-all duration-300 ease-out
                  group-hover:ring-4 group-hover:ring-foreground
                  group-focus-visible:ring-4 group-focus-visible:ring-foreground`}
              >
                <IconComponent 
                  className="w-16 h-16 sm:w-20 sm:h-20 text-white/90" 
                  strokeWidth={1.5}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Profile Name */}
              <span className="text-muted-foreground text-sm sm:text-base font-medium group-hover:text-foreground transition-colors duration-300">
                {profile.name}
              </span>

              {/* Description - shows on hover */}
              <motion.span 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-xs text-muted-foreground/70 max-w-[150px] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {profile.description}
              </motion.span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Manage Profiles Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 mt-16 px-6 py-2 border border-muted-foreground/30 text-muted-foreground
          hover:border-foreground hover:text-foreground
          transition-all duration-300 rounded text-sm tracking-wide"
      >
        Manage Profiles
      </motion.button>
    </div>
  );
};

export default ProfileSelector;
