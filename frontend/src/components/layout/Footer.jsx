import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
  ];

  return (
    <footer id="contact" className="bg-netflix-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="text-netflix-red font-display text-2xl tracking-[0.15em] inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              MANASWIN
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
              AI/ML Engineer passionate about building intelligent systems that solve real-world problems. 
              Always open to discussing new opportunities and collaborations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
              <span className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </div>

            {/* Resume Download */}
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-netflix-red text-foreground rounded text-sm font-medium hover:bg-netflix-red/90 transition-colors"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-netflix-red fill-netflix-red" /> in Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
