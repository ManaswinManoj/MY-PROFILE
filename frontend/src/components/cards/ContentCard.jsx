import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, ThumbsUp, ChevronDown, Check } from 'lucide-react';
import usePortfolioStore from '@/store/portfolioStore';

export const ContentCard = ({ 
  item, 
  variant = 'default', 
  showProgress = false,
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const myList = usePortfolioStore((state) => state.myList);
  const addToMyList = usePortfolioStore((state) => state.addToMyList);
  const removeFromMyList = usePortfolioStore((state) => state.removeFromMyList);
  
  const isInList = myList.some(i => i.id === item.id);

  const handleListToggle = (e) => {
    e.stopPropagation();
    if (isInList) {
      removeFromMyList(item.id);
    } else {
      addToMyList(item);
    }
  };

  const cardSizes = {
    default: 'w-[250px] sm:w-[280px] lg:w-[300px]',
    wide: 'w-[300px] sm:w-[340px] lg:w-[380px]',
    tall: 'w-[200px] sm:w-[220px]',
    small: 'w-[180px] sm:w-[200px]'
  };

  return (
    <motion.div
      className={`relative flex-shrink-0 ${cardSizes[variant]} cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick && onClick(item)}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.2 }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Progress Bar */}
        {showProgress && item.progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-netflix-gray">
            <div 
              className="h-full bg-netflix-red transition-all duration-300"
              style={{ width: `${Math.min(item.progress, 100)}%` }}
            />
          </div>
        )}

        {/* Hover Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none"
        >
          <h3 className="text-foreground text-sm font-semibold line-clamp-1">{item.title}</h3>
          <p className="text-foreground/70 text-xs line-clamp-1">{item.subtitle || item.category}</p>
        </motion.div>
      </div>

      {/* Expanded Info on Hover */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : -10,
          height: isHovered ? 'auto' : 0
        }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="absolute top-full left-0 right-0 bg-netflix-dark rounded-b-md shadow-card-hover overflow-hidden z-20"
      >
        {/* Action Buttons */}
        <div className="flex items-center gap-2 p-3 pb-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90"
            aria-label="Play"
          >
            <Play className="w-4 h-4 text-background fill-current" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleListToggle}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
              isInList 
                ? 'border-foreground bg-foreground/20' 
                : 'border-foreground/50 hover:border-foreground'
            }`}
            aria-label={isInList ? "Remove from list" : "Add to list"}
          >
            {isInList ? (
              <Check className="w-4 h-4 text-foreground" />
            ) : (
              <Plus className="w-4 h-4 text-foreground" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full border-2 border-foreground/50 flex items-center justify-center hover:border-foreground"
            aria-label="Like"
          >
            <ThumbsUp className="w-4 h-4 text-foreground" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full border-2 border-foreground/50 flex items-center justify-center hover:border-foreground ml-auto"
            aria-label="More info"
          >
            <ChevronDown className="w-4 h-4 text-foreground" />
          </motion.button>
        </div>

        {/* Meta Info */}
        <div className="px-3 pb-3">
          {item.matchScore && (
            <span className="text-accent-green text-xs font-semibold">{item.matchScore}% Match</span>
          )}
          
          {item.metrics && item.metrics.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {item.metrics.slice(0, 2).map((metric, idx) => (
                <span 
                  key={idx} 
                  className="text-foreground/60 text-xs"
                >
                  {metric.value} {metric.label}
                  {idx < Math.min(item.metrics.length, 2) - 1 && ' • '}
                </span>
              ))}
            </div>
          )}

          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {item.technologies.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx}
                  className="text-[10px] px-1.5 py-0.5 bg-accent/50 text-foreground/80 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContentCard;
