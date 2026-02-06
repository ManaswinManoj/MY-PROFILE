import React from 'react';
import { motion } from 'framer-motion';

export const TopPickCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className="relative flex-shrink-0 w-[220px] sm:w-[260px] lg:w-[300px] cursor-pointer group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Card Image */}
      <div className="relative aspect-video rounded-md overflow-hidden bg-netflix-dark">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        
        {/* Type Badge */}
        {item.type && (
          <span className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold rounded ${
            item.type === 'highlight' 
              ? 'bg-netflix-red text-foreground' 
              : item.type === 'achievement' 
              ? 'bg-accent-gold text-background' 
              : 'bg-accent-blue text-foreground'
          }`}>
            {item.type.toUpperCase()}
          </span>
        )}

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-foreground text-sm font-semibold line-clamp-1">{item.title}</h3>
          <p className="text-foreground/70 text-xs line-clamp-1">{item.subtitle}</p>
        </div>
      </div>

      {/* Hover Ring Effect */}
      <div className="absolute inset-0 rounded-md ring-2 ring-transparent group-hover:ring-foreground/30 transition-all duration-300" />
    </motion.div>
  );
};

export default TopPickCard;
