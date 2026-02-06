import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Zap, Award } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Target: Target,
  Users: Users,
  Zap: Zap,
  Award: Award
};

export const AchievementCard = ({ achievement, index }) => {
  const IconComponent = iconMap[achievement.icon] || Trophy;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="relative flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] rounded-lg overflow-hidden cursor-pointer group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient}`} />
      
      {/* Content */}
      <div className="relative z-10 p-5 sm:p-6">
        {/* Badge */}
        <div className="flex items-start justify-between mb-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${achievement.badgeColor} text-foreground text-xs font-bold rounded uppercase tracking-wide`}>
            {achievement.badge === 'WINNER' && '🏆'}
            {achievement.badge === 'EXCELLENCE' && '🎯'}
            {achievement.badge === 'IMPACT' && '💡'}
            {achievement.badge === 'PERFORMANCE' && '⚡'}
            {achievement.badge}
          </span>
          <IconComponent className="w-6 h-6 text-foreground/50" />
        </div>

        {/* Title */}
        <h3 className="text-foreground font-bold text-lg sm:text-xl mb-1">
          {achievement.title}
        </h3>
        <p className="text-foreground/80 text-sm font-medium mb-3">
          {achievement.subtitle}
        </p>

        {/* Description */}
        <p className="text-foreground/70 text-xs sm:text-sm mb-4 line-clamp-2">
          {achievement.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2">
          {achievement.metrics.map((metric, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 bg-foreground/10 text-foreground/90 rounded-full"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
    </motion.div>
  );
};

export default AchievementCard;
