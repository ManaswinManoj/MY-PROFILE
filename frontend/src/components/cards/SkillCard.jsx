import React from 'react';
import { motion } from 'framer-motion';
import { Star, Code2, Brain, Sparkles, BarChart3, Cloud, Wrench } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Brain: Brain,
  Sparkles: Sparkles,
  BarChart3: BarChart3,
  Cloud: Cloud,
  Wrench: Wrench
};

export const SkillCard = ({ skill, index }) => {
  const IconComponent = iconMap[skill.icon] || Code2;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[350px] rounded-lg overflow-hidden cursor-pointer group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-90`} />
      
      {/* Content */}
      <div className="relative z-10 p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
            <IconComponent className="w-5 h-5 text-foreground" />
          </div>
          <h3 className="text-foreground font-semibold text-base sm:text-lg">
            {skill.category}
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3">
          {skill.items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground/90 text-xs sm:text-sm font-medium truncate">
                  {item.name}
                </span>
              </div>
              
              {/* Proficiency Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className={`w-3 h-3 ${
                      starIdx < item.proficiency
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-foreground/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
    </motion.div>
  );
};

export default SkillCard;
