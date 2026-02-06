import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import usePortfolioStore from '@/store/portfolioStore';
import { projects, experiences, skills, achievements } from '@/data/portfolioData';

export const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const searchQuery = usePortfolioStore((state) => state.searchQuery);
  const setSearchQuery = usePortfolioStore((state) => state.setSearchQuery);

  useEffect(() => {
    if (isOpen) {
      setQuery(searchQuery);
      // Focus the input when overlay opens
      const input = document.getElementById('search-input');
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
    }
  }, [isOpen, searchQuery]);

  // Search results
  const results = useMemo(() => {
    if (!query.trim()) return { projects: [], experiences: [], skills: [], achievements: [] };

    const searchTerm = query.toLowerCase();

    return {
      projects: projects.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.technologies.some(t => t.toLowerCase().includes(searchTerm))
      ),
      experiences: experiences.filter(e =>
        e.title.toLowerCase().includes(searchTerm) ||
        e.company.toLowerCase().includes(searchTerm) ||
        e.technologies.some(t => t.toLowerCase().includes(searchTerm))
      ),
      skills: skills.filter(s =>
        s.category.toLowerCase().includes(searchTerm) ||
        s.items.some(i => i.name.toLowerCase().includes(searchTerm))
      ),
      achievements: achievements.filter(a =>
        a.title.toLowerCase().includes(searchTerm) ||
        a.subtitle.toLowerCase().includes(searchTerm)
      )
    };
  }, [query]);

  const hasResults = Object.values(results).some(arr => arr.length > 0);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value);
  };

  const handleClose = () => {
    setQuery('');
    setSearchQuery('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50"
        >
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Search Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="search-input"
                  type="text"
                  placeholder="Search projects, skills, experiences..."
                  value={query}
                  onChange={handleSearch}
                  className="w-full h-14 pl-12 pr-4 bg-accent/50 border-border text-foreground text-lg placeholder:text-muted-foreground focus-visible:ring-netflix-red"
                  autoComplete="off"
                />
              </div>
              <button
                onClick={handleClose}
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Search Results */}
            <div className="space-y-8 max-h-[70vh] overflow-y-auto scrollbar-hide">
              {query.trim() && !hasResults && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-muted-foreground text-center py-8"
                >
                  No results found for "{query}"
                </motion.p>
              )}

              {/* Projects Results */}
              {results.projects.length > 0 && (
                <SearchSection title="Projects" items={results.projects} type="project" />
              )}

              {/* Experience Results */}
              {results.experiences.length > 0 && (
                <SearchSection title="Experience" items={results.experiences} type="experience" />
              )}

              {/* Skills Results */}
              {results.skills.length > 0 && (
                <SearchSection title="Skills" items={results.skills} type="skill" />
              )}

              {/* Achievements Results */}
              {results.achievements.length > 0 && (
                <SearchSection title="Achievements" items={results.achievements} type="achievement" />
              )}

              {/* Quick Search Suggestions */}
              {!query.trim() && (
                <div>
                  <h3 className="text-foreground font-semibold mb-4">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Machine Learning', 'GPT-4', 'DRDO', 'Computer Vision', 'TensorFlow'].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          setQuery(term);
                          setSearchQuery(term);
                        }}
                        className="px-4 py-2 bg-accent rounded-full text-foreground/80 hover:bg-accent/80 hover:text-foreground transition-colors text-sm"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SearchSection = ({ title, items, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-foreground font-semibold text-lg mb-3 flex items-center gap-2">
        {title}
        <span className="text-muted-foreground text-sm font-normal">({items.length})</span>
      </h3>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <SearchResultItem key={item.id || idx} item={item} type={type} />
        ))}
      </div>
    </motion.div>
  );
};

const SearchResultItem = ({ item, type }) => {
  const getSubtitle = () => {
    switch (type) {
      case 'project':
        return item.category;
      case 'experience':
        return `${item.company} • ${item.dateRange}`;
      case 'skill':
        return `${item.items.length} skills`;
      case 'achievement':
        return item.subtitle;
      default:
        return '';
    }
  };

  return (
    <motion.button
      whileHover={{ x: 5 }}
      className="w-full flex items-center gap-4 p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors text-left group"
    >
      {item.thumbnail && (
        <img
          src={item.thumbnail}
          alt={item.title || item.category}
          className="w-16 h-12 object-cover rounded"
        />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-foreground font-medium truncate">{item.title || item.category}</p>
        <p className="text-muted-foreground text-sm truncate">{getSubtitle()}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
    </motion.button>
  );
};

export default SearchOverlay;
