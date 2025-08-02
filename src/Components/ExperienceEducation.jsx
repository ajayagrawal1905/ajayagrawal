import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const timelineData = [
  {
    type: 'experience',
    icon: <FaBriefcase />,
    title: 'Web Developer Intern',
    company: 'AdToken, Bangalore',
    date: 'Nov 2024 – Present',
    description: [
      'Built a decentralized widget enabling seamless crypto swaps using Web3.js and smart contracts.',
      'Crafted animated, mobile-friendly landing pages with reusable React and TypeScript components.',
      'Developed multi-chain faucet platforms supporting Ethereum, Solana, and Sui testnets.'
    ],
  },
  {
    type: 'experience',
    icon: <FaBriefcase />,
    title: 'Technical Support Engineer',
    company: 'Square Yards, Pune',
    date: 'Apr 2024 – Nov 2024',
    description: [
      'Resolved software crashes and deployment issues across web environments.',
      'Maintained system integrity and reduced client downtime through advanced debugging techniques.'
    ],
  },
  {
    type: 'education',
    icon: <FaGraduationCap />,
    title: 'Bachelor of Technology',
    company: 'Marathwada Institute of Technology, Aurangabad',
    date: '2018 – 2022',
    description: [
      'Graduated with 8.24 CGPA.',
      'Completed projects in job portals, car rental systems, and library management using MERN and SpringBoot stacks.'
    ],
  }
];

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`md:flex w-full relative ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
      <div className="md:w-1/2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-xl border border-gray-200 dark:border-gray-700 relative z-10"
        >
          <div className="flex items-center gap-3 mb-2 text-indigo-600 dark:text-indigo-400">
            <div className="text-lg">{item.icon}</div>
            <h4 className="font-bold text-lg">{item.title}</h4>
          </div>
          <h5 className="text-sm text-gray-600 dark:text-gray-400 mb-1">{item.company}</h5>
          <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-3">{item.date}</p>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 border-4 border-white dark:border-gray-900 rounded-full z-20"></div>
    </div>
  );
};

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Experience & Education</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">My professional journey so far</p>
        </div>

        <div className="relative border-l-2 border-indigo-300 dark:border-indigo-600 space-y-16">
          {timelineData.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;