import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ContentRow = ({ title, icon, children, className = '' }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 50);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 50
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`relative py-4 sm:py-6 ${className}`}
    >
      {/* Section Title */}
      <div className="px-4 sm:px-8 lg:px-12 mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground flex items-center gap-2 group cursor-default">
          {icon && <span className="text-base sm:text-lg">{icon}</span>}
          <span className="group-hover:text-foreground/80 transition-colors">{title}</span>
          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent-blue" />
        </h2>
      </div>

      {/* Content Container */}
      <div className="relative group/row">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-0 bottom-0 z-20 w-12 sm:w-16 flex items-center justify-center
            bg-gradient-to-r from-background to-transparent
            opacity-0 group-hover/row:opacity-100 transition-opacity duration-300
            ${showLeftArrow ? 'pointer-events-auto' : 'pointer-events-none opacity-0'}`}
          aria-label="Scroll left"
        >
          <div className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background hover:scale-110 transition-all">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </div>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-0 bottom-0 z-20 w-12 sm:w-16 flex items-center justify-center
            bg-gradient-to-l from-background to-transparent
            opacity-0 group-hover/row:opacity-100 transition-opacity duration-300
            ${showRightArrow ? 'pointer-events-auto' : 'pointer-events-none opacity-0'}`}
          aria-label="Scroll right"
        >
          <div className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background hover:scale-110 transition-all">
            <ChevronRight className="w-6 h-6 text-foreground" />
          </div>
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-8 lg:px-12 pb-4"
          style={{ scrollSnapType: 'x proximity' }}
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default ContentRow;
