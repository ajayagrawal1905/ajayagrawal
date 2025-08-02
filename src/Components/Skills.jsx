import React from 'react';
import { FaLaptopCode, FaServer, FaPaintBrush, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skillData = [
  {
    category: 'Frontend Development',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'HTML5 & CSS3', value: 95 },
      { name: 'JavaScript', value: 90 },
      { name: 'React.js', value: 85 },
      { name: 'Vue.js', value: 80 },
    ],
  },
  {
    category: 'Backend Development',
    icon: <FaServer />,
    skills: [
      { name: 'Node.js', value: 90 },
      { name: 'Express.js', value: 85 },
      { name: 'MongoDB', value: 80 },
      { name: 'RESTful APIs', value: 85 },
    ],
  },
  {
    category: 'Design & Tools',
    icon: <FaPaintBrush />,
    skills: [
      { name: 'UI/UX Design', value: 75 },
      { name: 'Figma', value: 85 },
      { name: 'Git & GitHub', value: 90 },
      { name: 'Docker', value: 70 },
    ],
  },
  {
    category: 'DevOps',
    icon: <FaTools />,
    skills: [
      { name: 'AWS', value: 75 },
      { name: 'Docker', value: 85 },
      { name: 'Jenkins', value: 90 },
      { name: 'Kubernetes', value: 70 },
    ],
  },
];

const getColor = (value) => {
  if (value >= 90) return 'bg-green-500';
  if (value >= 80) return 'bg-blue-500';
  if (value >= 70) return 'bg-yellow-500';
  return 'bg-red-500';
};

const Skills = () => {
  return (
    <section id="skills" className="py-[5%] bg-white dark:bg-gray-900 transition-all">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Technologies & tools I specialize in</p>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6 text-indigo-600 dark:text-indigo-400 text-xl font-semibold">
                <span className="text-2xl">{category.icon}</span>
                {category.category}
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded ${getColor(skill.value)}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;