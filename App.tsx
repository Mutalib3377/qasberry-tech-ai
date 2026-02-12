
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoadmapBuilder from './pages/RoadmapBuilder';
import IndustryDetail from './pages/IndustryDetail';
import KnowledgeCenter from './pages/KnowledgeCenter';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0B0F3F]">
        {/* Animated Background Accents */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#00F5FF]/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#9A6CFF]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap-builder" element={<RoadmapBuilder />} />
            <Route path="/solutions/:industryId" element={<IndustryDetail />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
