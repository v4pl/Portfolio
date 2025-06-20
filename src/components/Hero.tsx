import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CodeEditor from './CodeEditor';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Frontend Dev & UI/UX Wizard',
    'JavaScript Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 flex items-center justify-center min-h-screen relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">
          {/* Left - Text Content */}
          <motion.div
            className="text-center lg:text-left relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-blue-400 text-xl font-mono">Hello,</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4 leading-tight font-mono relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white">I'm </span>
              <span className="bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
                V4PL
              </span>
            </motion.h1>

            {/* Glassmorphic Tags with bright blue border and glow */}
            <motion.div
              className="mt-4 mb-8 flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {['UI Magic', 'Innovation', 'Clean Code'].map((tag, i) => (
                <motion.div
                  key={i}
                  className="px-4 py-1 rounded-full text-sm font-mono bg-black/20 backdrop-blur-lg border border-blue-500 text-white shadow-md cursor-pointer transition-all duration-300"
                  style={{
                    boxShadow: '0 0 10px rgba(59,130,246,0.3)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(59,130,246,0.8)',
                    borderColor: 'rgba(59,130,246,1)',
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    color: 'white',
                  }}
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-xl md:text-2xl text-blue-300 mb-16 leading-relaxed font-mono h-12 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center lg:justify-start"
                >
                  {titles[currentTitle]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToSkills}
                className="px-8 py-3 bg-black/20 backdrop-blur-lg border-2 border-blue-500 text-white rounded-lg font-semibold font-mono relative group overflow-hidden transition-all duration-300 shadow-md hover:bg-blue-500/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(59,130,246,0.2)',
                  boxShadow: '0 0 30px rgba(59,130,246,0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Code Editor */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <CodeEditor />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={scrollToSkills}
          className="text-white/60 hover:text-blue-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;