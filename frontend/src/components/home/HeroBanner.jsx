import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, Info, Plus, FileText, Linkedin, Github } from 'lucide-react';
import { personalInfo, heroStats, images } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';

// Pre-generate particle positions for stable animation
const generateParticlePositions = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${(i * 5) % 100}%`,
    y: `${(i * 7 + 10) % 100}%`,
    duration: 3 + (i % 4),
    delay: (i % 3) * 0.5
  }));
};

const PARTICLE_POSITIONS = generateParticlePositions();

export const HeroBanner = () => {
  const particles = useMemo(() => PARTICLE_POSITIONS, []);

  return (
    <section id="home" className="relative min-h-screen flex items-end pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${images.hero})`,
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-background/40" />
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-30">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-accent-blue rounded-full"
              initial={{ 
                x: particle.x, 
                y: particle.y,
                opacity: 0.3 
              }}
              animate={{ 
                y: [null, '-20%'],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-netflix-red/90 text-foreground text-xs sm:text-sm font-medium rounded">
            <span className="animate-pulse">🎯</span>
            TOP RATED • AI/ML ENGINEER
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-2 text-shadow-netflix"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-display text-foreground/90 tracking-wider mb-4"
        >
          {personalInfo.tagline}
        </motion.h2>

        {/* Stats Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground/80 mb-4"
        >
          {heroStats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <span className="font-semibold text-foreground">{stat.value}</span>
              <span className="text-foreground/60">{stat.label}</span>
              {index < heroStats.length - 1 && (
                <span className="text-muted-foreground">|</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mb-8 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-6 h-12 text-base"
            asChild
          >
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Download Resume
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="secondary"
            className="bg-foreground/20 text-foreground hover:bg-foreground/30 font-semibold px-6 h-12 text-base backdrop-blur-sm"
            onClick={() => {
              const element = document.getElementById('experience');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Info className="w-5 h-5 mr-2" />
            More Info
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 font-semibold h-12 px-6 text-base"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add to My List
          </Button>
        </motion.div>

        {/* Secondary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Button
            variant="outline"
            className="border-foreground/40 text-foreground hover:bg-foreground/10 hover:border-foreground/60"
            asChild
          >
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-foreground/40 text-foreground hover:bg-foreground/10 hover:border-foreground/60"
            asChild
          >
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-foreground/40 text-foreground hover:bg-foreground/10 hover:border-foreground/60"
            asChild
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroBanner;
