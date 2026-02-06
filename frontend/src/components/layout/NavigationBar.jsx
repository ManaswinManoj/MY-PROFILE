import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, ChevronDown, User, Settings, HelpCircle, LogOut, FileText, Linkedin, Github, Mail } from 'lucide-react';
import usePortfolioStore from '@/store/portfolioStore';
import { navItems, personalInfo } from '@/data/portfolioData';

export const NavigationBar = ({ onSearchClick, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const activeNav = usePortfolioStore((state) => state.activeNav);
  const setActiveNav = usePortfolioStore((state) => state.setActiveNav);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (navId) => {
    setActiveNav(navId);
    if (onNavClick) onNavClick(navId);
    
    // Scroll to section
    const element = document.getElementById(navId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm' 
          : 'bg-gradient-to-b from-background via-background/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12 h-16 lg:h-[68px]">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-6 lg:gap-10">
          <motion.a
            href="#home"
            className="text-netflix-red font-display text-xl sm:text-2xl tracking-[0.15em] hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavItemClick('home');
            }}
          >
            MANASWIN
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-foreground relative py-2 ${
                  activeNav === item.id 
                    ? 'text-foreground font-semibold' 
                    : 'text-foreground/70'
                }`}
              >
                {item.label}
                {activeNav === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-netflix-red"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section - Icons & Profile */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSearchClick}
            className="text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </motion.button>

          {/* Notification Bell */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block text-foreground/80 hover:text-foreground transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-netflix-red rounded-full" />
          </motion.button>

          {/* Profile Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded bg-gradient-to-br from-netflix-red to-red-700 flex items-center justify-center text-foreground text-sm font-semibold">
                MM
              </div>
              <ChevronDown 
                className={`w-4 h-4 text-foreground/70 transition-transform duration-200 ${
                  isProfileOpen ? 'rotate-180' : ''
                }`}
              />
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-3 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-2xl overflow-hidden"
                >
                  {/* Profile Header */}
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gradient-to-br from-netflix-red to-red-700 flex items-center justify-center text-foreground font-semibold">
                        MM
                      </div>
                      <div>
                        <p className="text-foreground font-medium text-sm">{personalInfo.name}</p>
                        <p className="text-muted-foreground text-xs">{personalInfo.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <DropdownItem icon={User} label="Manage Profiles" />
                    <DropdownItem icon={Settings} label="Account Settings" />
                    <DropdownItem icon={Mail} label="Contact Me" href={`mailto:${personalInfo.email}`} />
                    <DropdownItem icon={HelpCircle} label="Help Center" />
                  </div>

                  {/* External Links */}
                  <div className="py-2 border-t border-border">
                    <DropdownItem 
                      icon={FileText} 
                      label="Download Resume" 
                      href={personalInfo.resumeUrl}
                      external
                    />
                    <DropdownItem 
                      icon={Linkedin} 
                      label="LinkedIn Profile" 
                      href={personalInfo.linkedin}
                      external
                    />
                    <DropdownItem 
                      icon={Github} 
                      label="GitHub Profile" 
                      href={personalInfo.github}
                      external
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 px-4 pb-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`text-xs font-medium whitespace-nowrap transition-colors ${
                activeNav === item.id 
                  ? 'text-foreground' 
                  : 'text-foreground/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const DropdownItem = ({ icon: Icon, label, href, external, onClick }) => {
  const baseClasses = "flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors cursor-pointer";
  
  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} w-full`}>
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
};

export default NavigationBar;
