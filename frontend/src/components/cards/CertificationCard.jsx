import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Database, ExternalLink } from 'lucide-react';

const iconMap = {
  Award: Award,
  Cloud: Cloud,
  Database: Database
};

export const CertificationCard = ({ certification, index }) => {
  const IconComponent = iconMap[certification.icon] || Award;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="relative flex-shrink-0 w-[240px] sm:w-[280px] rounded-lg overflow-hidden cursor-pointer group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${certification.gradient} opacity-90`} />
      
      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5">
        {/* Certificate Seal/Icon */}
        <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center mb-4 mx-auto">
          <IconComponent className="w-7 h-7 text-foreground" />
        </div>

        {/* Title */}
        <h3 className="text-foreground font-semibold text-sm sm:text-base text-center mb-2 line-clamp-2">
          {certification.title}
        </h3>

        {/* Provider */}
        <p className="text-foreground/70 text-xs sm:text-sm text-center mb-4">
          {certification.provider}
        </p>

        {/* View Button - shows on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/20 rounded-full text-foreground text-xs hover:bg-foreground/30 transition-colors">
            <ExternalLink className="w-3 h-3" />
            View Certificate
          </button>
        </motion.div>
      </div>

      {/* Completion Badge */}
      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent-green flex items-center justify-center">
        <svg className="w-3 h-3 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
    </motion.div>
  );
};

export default CertificationCard;
