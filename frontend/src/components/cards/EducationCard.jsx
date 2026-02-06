import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const iconMap = {
  GraduationCap: GraduationCap,
  Award: Award
};

export const EducationCard = ({ education, index }) => {
  const IconComponent = iconMap[education.icon] || GraduationCap;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="relative flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px] rounded-lg overflow-hidden cursor-pointer group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${education.gradient} opacity-90`} />
      
      {/* Content */}
      <div className="relative z-10 p-5 sm:p-6">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-foreground" />
        </div>

        {/* Title */}
        <h3 className="text-foreground font-bold text-base sm:text-lg mb-1">
          {education.title}
        </h3>
        <p className="text-foreground/80 font-medium text-sm mb-3">
          {education.institution}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 text-foreground/70 text-xs sm:text-sm mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {education.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {education.dateRange}
          </span>
        </div>

        {/* Focus Area */}
        <div className="px-3 py-1.5 bg-foreground/10 text-foreground/90 rounded-full inline-block text-xs sm:text-sm">
          {education.focus}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
    </motion.div>
  );
};

export default EducationCard;
