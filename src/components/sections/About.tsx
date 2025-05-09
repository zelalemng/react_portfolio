import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      }
    })
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary-600 dark:text-primary-400">About</span> Me
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            A passionate developer with expertise in building immersive web experiences
            and bringing creative ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="bg-primary-500/10 dark:bg-primary-900/20 rounded-xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Journey</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                <span className="text-accent-600 dark:text-accent-400">Hi there!</span>, I'm zelalem Negash started my journey as a web developer in 2024, fascinated by the potential of 
                  creating interactive experiences. almost a year, I've cultivated my <span className="text-accent-600 dark:text-accent-400">skills in 
                  front-end development, Back-end, and interactive design</span>.
                   I find joy in typing code to bring innovative ideas to life and staying abreast of the latest tech advancements through informative videos. I am dedicated to continuous learning and growth, and I am enthusiastic about the potential at the intersection of education and technology. I am committed to making a meaningful impact in both fields and Beyond.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  My passion lies in merging technical excellence with creative design to build 
                  memorable digital experiences that leave a lasting impression.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <MapPin size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Shashemene, Ethiopia</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">1 Year Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">8+ Projects Completed</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-highlight-500/20 rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Briefcase size={24} />,
                  title: 'Work Experience',
                  description: 'Freelance as a Fullstack Developer .',
                  delay: 1
                },
                {
                  icon: <GraduationCap size={24} />,
                  title: 'Education',
                  description: 'Fullstack software engineer, ALX , 2018.',
                  delay: 2
                },
                {
                  icon: <Code size={24} />,
                  title: 'Specialization',
                  description: 'Front-end, React Native, and interactive web design.',
                  delay: 3
                },
                {
                  icon: <Award size={24} />,
                  title: 'Education Background',
                  description: 'B.Sc (Accounting and Finance), M.Sc (appliad Physics)',
                  delay: 4
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={item.delay}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass card p-6"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg inline-block mb-4">
                    <span className="text-primary-600 dark:text-primary-400">{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;