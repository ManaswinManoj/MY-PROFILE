import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ChevronRight } from 'lucide-react';

export const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative flex-shrink-0 w-[340px] sm:w-[400px] lg:w-[450px] min-h-[320px] rounded-lg overflow-hidden cursor-pointer group`}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-90`} />
      
      {/* Content */}
      <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Company Icon */}
            <div className={`w-12 h-12 rounded-full ${experience.iconBg} flex items-center justify-center`}>
              <Briefcase className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold text-base sm:text-lg leading-tight">
                {experience.title}
              </h3>
              <p className="text-foreground/80 text-sm font-medium">{experience.company}</p>
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-foreground/70 text-xs sm:text-sm">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {experience.dateRange}
          </span>
        </div>

        {/* Achievements */}
        <ul className="space-y-2 flex-1 overflow-hidden">
          {experience.achievements.slice(0, 3).map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-foreground/90 text-xs sm:text-sm">
              <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-foreground/60" />
              <span className="line-clamp-2">{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-4 pt-3 border-t border-foreground/20">
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.slice(0, 6).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-xs px-2 py-1 bg-foreground/10 text-foreground/90 rounded-full"
              >
                {tech}
              </span>
            ))}
            {experience.technologies.length > 6 && (
              <span className="text-[10px] sm:text-xs px-2 py-1 bg-foreground/10 text-foreground/70 rounded-full">
                +{experience.technologies.length - 6}
              </span>
            )}
          </div>
        </div>

        {/* Metrics Preview */}
        {experience.metrics && (
          <div className="mt-3 flex items-center gap-3 text-foreground/80 text-xs">
            {experience.metrics.slice(0, 2).map((metric, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <span className="font-bold text-foreground">{metric.value}</span>
                <span className="opacity-70">{metric.label}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${experience.iconBg} border-4 border-background`} />
    </motion.div>
  );
};

export default ExperienceCard;
