import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import usePortfolioStore from '@/store/portfolioStore';

// Layout Components
import NavigationBar from '@/components/layout/NavigationBar';
import Footer from '@/components/layout/Footer';

// Home Components
import ProfileSelector from '@/components/home/ProfileSelector';
import HeroBanner from '@/components/home/HeroBanner';
import ContentRow from '@/components/home/ContentRow';

// Card Components
import ContentCard from '@/components/cards/ContentCard';
import ExperienceCard from '@/components/cards/ExperienceCard';
import SkillCard from '@/components/cards/SkillCard';
import AchievementCard from '@/components/cards/AchievementCard';
import EducationCard from '@/components/cards/EducationCard';
import CertificationCard from '@/components/cards/CertificationCard';
import TopPickCard from '@/components/cards/TopPickCard';

// Modals
import ProjectModal from '@/components/modals/ProjectModal';
import SearchOverlay from '@/components/modals/SearchOverlay';

// Data
import {
  projects,
  experiences,
  skills,
  achievements,
  education,
  certifications,
  topPicks
} from '@/data/portfolioData';

// Main Portfolio Page Component
const PortfolioPage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myList = usePortfolioStore((state) => state.myList);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <NavigationBar onSearchClick={() => setIsSearchOpen(true)} />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Content Rows */}
      <main className="relative z-10 -mt-16 pb-16">
        {/* Top Picks Row */}
        <ContentRow title="Today's Top Picks for You" icon="⭐">
          {topPicks.map((item, index) => (
            <TopPickCard key={item.id} item={item} index={index} />
          ))}
        </ContentRow>

        {/* Experience & Timeline Row */}
        <section id="experience">
          <ContentRow title="Work Experience & Education Timeline" icon="💼">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
            {education.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={experiences.length + index} />
            ))}
          </ContentRow>
        </section>

        {/* Technical Projects Row */}
        <section id="projects">
          <ContentRow title="Continue Watching - Technical Projects" icon="🚀">
            {projects.map((project, index) => (
              <ContentCard
                key={project.id}
                item={project}
                showProgress
                onClick={handleProjectClick}
              />
            ))}
          </ContentRow>
        </section>

        {/* Skills Row */}
        <section id="skills">
          <ContentRow title="Skills & Expertise" icon="💻">
            {skills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </ContentRow>
        </section>

        {/* Achievements Row */}
        <section id="achievements">
          <ContentRow title="Key Achievements & Awards" icon="🏆">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </ContentRow>
        </section>

        {/* Certifications Row */}
        <section id="education">
          <ContentRow title="Certifications & Learning" icon="🎓">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} index={index} />
            ))}
          </ContentRow>
        </section>

        {/* My List Row */}
        {myList.length > 0 && (
          <ContentRow title="My List - Featured Content" icon="⭐">
            {myList.map((item, index) => (
              <ContentCard
                key={item.id}
                item={item}
                onClick={handleProjectClick}
              />
            ))}
          </ContentRow>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

// Main App Component with Profile Selection
const AppContent = () => {
  const selectedProfile = usePortfolioStore((state) => state.selectedProfile);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleProfileSelect = () => {
    // Trigger transition animation
    setTimeout(() => {
      setShowPortfolio(true);
    }, 500);
  };

  return (
    <AnimatePresence mode="wait">
      {!showPortfolio ? (
        <motion.div
          key="profile-selector"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileSelector onSelectProfile={handleProfileSelect} />
        </motion.div>
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PortfolioPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
