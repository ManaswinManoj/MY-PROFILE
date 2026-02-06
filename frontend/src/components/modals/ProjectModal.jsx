import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Plus, ThumbsUp, ThumbsDown, Share2, ExternalLink, Github, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import usePortfolioStore from '@/store/portfolioStore';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  const myList = usePortfolioStore((state) => state.myList);
  const addToMyList = usePortfolioStore((state) => state.addToMyList);
  const removeFromMyList = usePortfolioStore((state) => state.removeFromMyList);
  
  const isInList = myList.some(i => i.id === project?.id);

  const handleListToggle = () => {
    if (isInList) {
      removeFromMyList(project.id);
    } else {
      addToMyList(project);
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed inset-4 sm:inset-8 lg:inset-y-8 lg:inset-x-[10%] bg-netflix-dark rounded-lg overflow-hidden z-50 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 scrollbar-hide">
              {/* Hero Image */}
              <div className="relative aspect-video w-full max-h-[50vh]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-netflix-dark/50 to-transparent" />
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {project.title}
                  </h2>
                  
                  {/* Quick Info */}
                  <div className="flex items-center gap-3 text-sm text-foreground/80 mb-4">
                    <span className="text-accent-green font-semibold">{project.matchScore}% Match</span>
                    <span className="px-2 py-0.5 border border-foreground/30 text-xs rounded">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <Button className="bg-foreground text-background hover:bg-foreground/90">
                      <Play className="w-5 h-5 mr-2 fill-current" />
                      View Demo
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-foreground/50 text-foreground hover:bg-foreground/10"
                      onClick={handleListToggle}
                    >
                      {isInList ? (
                        <Check className="w-5 h-5 mr-2" />
                      ) : (
                        <Plus className="w-5 h-5 mr-2" />
                      )}
                      {isInList ? 'In My List' : 'Add to List'}
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="ghost" className="text-foreground/70 hover:text-foreground">
                        <ThumbsUp className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="ghost" className="text-foreground/70 hover:text-foreground">
                        <ThumbsDown className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="ghost" className="text-foreground/70 hover:text-foreground">
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">About this Project</h3>
                  <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-3">Key Metrics</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-accent/50 rounded-lg p-4 text-center">
                          <p className="text-foreground text-2xl font-bold">{metric.value}</p>
                          <p className="text-foreground/60 text-sm">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
