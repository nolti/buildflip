import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { LeadMagnet } from './components/LeadMagnet';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#282a36] transition-colors duration-200">
        <Navigation />
        
        <main>
          <Hero />
          <Services />
          <Projects />
          <Team />
          <LeadMagnet />
        </main>

        <Footer />
        <FloatingChat />
      </div>
    </ThemeProvider>
  );
}

export default App;