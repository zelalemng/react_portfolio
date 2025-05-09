/**import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const [typing, setTyping] = useState('');
  const fullText = 'Web Developer & 3D Enthusiast';
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTyping(prevText => prevText + fullText[typingIndex]);
        setTypingIndex(prevTypingIndex => prevTypingIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, fullText]);

  return (
    <section id="home" className="section min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Hello, I'm</span>
              <br />
              <span className="text-primary-600 dark:text-primary-400">Zelalem Developer</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-8">
              {typing}<span className="animate-pulse">|</span>
            </h2>
          </motion.div>
          
          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creating beautiful digital experiences with clean code and
            cutting-edge technology. Specialized in React, Three.js, and
            interactive web applications.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              <Code size={18} className="mr-2" /> View Projects
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={18} className="mr-2" /> GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;*/
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Github } from 'lucide-react';
import profile1 from '../../images/profile1.jpg'; // Adjust the path as necessary
const Hero: React.FC = () => {
  const [typing, setTyping] = useState('');
  const fullText = 'Web Developer & React Native';
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTyping(prevText => prevText + fullText[typingIndex]);
        setTypingIndex(prevTypingIndex => prevTypingIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, fullText]);

  return (
    <section id="home" className="section min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bold mb-4">
                <span className="text-gray-900 dark:text-white">Hello, I'm</span>
                <br />
                <span className="text-primary-600 dark:text-primary-400">Zelalem Negash</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-8">
                {typing}<span className="animate-pulse">|</span>
              </h2>
            </motion.div>
            
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Creating beautiful digital experiences with clean code and
              cutting-edge technology. Specialized in React, React Native, and
              interactive web applications.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#projects" className="btn btn-primary">
                <Code size={18} className="mr-2" /> View Projects
              </a>
              <a 
                href="https://github.com/zelalemng" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} className="mr-2" /> GitHub Profile
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 relative shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 blur-lg opacity-50 animate-pulse"></div>
            <img
              src={profile1} // Replace with your image path
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
            />
            <div className="absolute inset-0 rounded-full border-2 border-white dark:border-gray-800 z-20"></div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;