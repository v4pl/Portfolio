import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Code, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <motion.header
      className="fixed top-6 left-1/2 z-50 w-auto max-w-full px-4 transform -translate-x-1/2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="relative flex justify-center">
        {/* Brighter, stronger blue glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl scale-110"
          style={{
            backgroundColor: 'rgba(59,130,246,0.35)', // brighter blue glow
            filter: 'blur(40px)',                    // stronger blur for glow
            boxShadow: '0 0 30px 10px rgba(59,130,246,0.5)', // intense glow shadow
            zIndex: -1,
          }}
        ></div>

        <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500 rounded-full px-6 py-4 shadow-2xl flex justify-center">
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 font-medium px-6 py-3 rounded-full hover:bg-white/10 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon size={16} className="transition-colors" />
                <span className="font-mono text-sm font-medium">{item.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-200 p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pt-4 border-t border-white/20 w-full max-w-xs mx-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-white/80 hover:text-blue-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  <item.icon size={16} />
                  <span className="font-mono text-sm">{item.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;