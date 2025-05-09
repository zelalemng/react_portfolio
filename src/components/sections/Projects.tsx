import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import  project from '../../images/project.jpg';
import carRent from '../../images/carrent.jpg';
import chat from '../../images/chat.jpg';
import mobile from '../../images/mobile.jpg';
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Car Rent Management System",
      description: "An interactive, Users can chats in real-time with various options.",
      technologies: ["React", "Firebase", "JavScript", "css"],
      image: chat,
      demoLink: "https://example.com/project1",
      githubLink: "https://github.com/zelalemng/portfolio_project_chatapp",
    },
    {
      id: 2,
      title: "Car Rent Management System",
      description: "A dynamic data visualization tool that transforms complex datasets into interactive 3D graphs and charts.",
      technologies: ["typescript", "Mongodb", "React", "Node.js", "tailwindcss"],
      image: carRent,
      demoLink: "https://example.com/project2",
      githubLink: "https://github.com/zelalemng",
    },
    {
      id: 3,
      title: "Market Analysis",
      description: "Expert insights and predictions for gold markets.",
      technologies: ["css", "React Native", "TypeScript", "Supabase", "expo"],
      image: mobile,
      demoLink: "https://example.com/project3",
      githubLink: "https://github.com/username/project3",
    },
    {
      id: 4,
      title: "Images Comparison Project",
      description: " am inspired for image comparison project in an application can vary depending on the specific context and requirements.",
      technologies: ["Python", "firebase", "css", "bootstrap"],
      image: project,
      demoLink: "https://example.com/project4",
      githubLink: "https://github.com/zelalemng/ImageComp_portifolio_project",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            A selection of my recent work, showcasing interactive 3D experiences and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group overflow-hidden"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs px-2 py-1 bg-white/20 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label={`View demo for ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label={`View code for ${project.title}`}
                      >
                        <Code size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 flex items-center hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 flex items-center hover:underline"
                  >
                    <Github size={16} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;