import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24">
          <motion.div
            className="absolute inset-0 border-4 border-t-primary-500 border-r-accent-500 border-b-highlight-500 border-l-gray-300 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <motion.div
          className="mt-4 text-xl font-medium text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading Experience...
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;