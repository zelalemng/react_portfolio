import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  category: string;
  level: number; // 1-10
  color: string;
}

const SkillSphere: React.FC<{ skill: Skill; position: [number, number, number] }> = ({ skill, position }) => {
  // Scale size based on skill level (5-10)
  const size = 0.5 + (skill.level / 20);
  
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={skill.color} roughness={0.3} metalness={0.7} />
      <Text
        position={[0, 0, size + 0.2]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </mesh>
  );
};

const SkillsScene: React.FC<{ skills: Skill[]; category: string }> = ({ skills, category }) => {
  // Filter skills by category
  const filteredSkills = skills.filter(skill => skill.category === category);
  
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Distribute skills in a circle */}
      {filteredSkills.map((skill, i) => {
        const angle = (i / filteredSkills.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return <SkillSphere key={skill.name} skill={skill} position={[x, y, 0]} />;
      })}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={1} 
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
    </Canvas>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', level: 9, color: '#61DAFB' },
    { name: 'TypeScript', category: 'frontend', level: 8, color: '#3178C6' },
    { name: 'Javscript', category: 'frontend', level: 7, color: '#000000' },
    { name: 'Python', category: 'frontend', level: 9, color: '#4FC08D' },
    { name: 'CSS/SASS', category: 'frontend', level: 8, color: '#CC6699' },
    { name: 'Tailwind', category: 'frontend', level: 9, color: '#38B2AC' },
    
    // Backend
    { name: 'Node.js', category: 'backend', level: 8, color: '#339933' },
    { name: 'Express', category: 'backend', level: 9, color: '#000000' },
    { name: 'MongoDB', category: 'backend', level: 8, color: '#47A248' },
    { name: 'PostgreSQL', category: 'backend', level: 8, color: '#336791' },
    { name: 'NGINX', category: 'backend', level: 8, color: '#E10098' },
    
    // Design
    { name: 'Figma', category: 'design', level: 7, color: '#F24E1E' },
    { name: 'Adobe XD', category: 'design', level: 7, color: '#FF61F6' },
    { name: 'Blender', category: 'design', level: 2, color: '#F5792A' },
    { name: 'Penpot', category: 'design', level: 7, color: '#990000' },
    { name: 'UI/UX', category: 'design', level: 8, color: '#0ACF83' },
    
    // Other
    { name: 'Git', category: 'other', level: 8, color: '#F05032' },
    { name: 'Docker', category: 'other', level: 8, color: '#2496ED' },
    { name: 'Apache', category: 'other', level: 8, color: '#FF9900' },
    { name: 'Bash', category: 'other', level: 9, color: '#C21325' },
    { name: 'CI/CD', category: 'other', level: 6, color: '#4B32C3' },
  ];
  
  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            My technical toolkit includes a range of languages, frameworks, and tools that enable me to create immersive digital experiences.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[500px] mb-16 glass card">
          <SkillsScene skills={skills} category={activeCategory} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {categorySkills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {skill.level}/10
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.level * 10}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;