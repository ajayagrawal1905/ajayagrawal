import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projectData = [
  {
    title: 'Job Portal Platform',
    description:
      'A full-featured job portal for job seekers and recruiters. Includes job listings, application tracking, and real-time notifications.',
    image:
      'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Web App',
    live: '#',
    source: '#',
  },
  {
    title: 'Car Rental System',
    description:
      'A responsive web app for vehicle booking and rental management with live availability, secure payments, and customer reviews.',
    image:
      'https://imgs.search.brave.com/KALUAu3XrxLEeJRwCP0cWXJ55kbYmT8B_3P5Twbx9wA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jYXIt/cmVudC1zZXJ2aWNl/LW9mZmljZS1yZW50/YWwtY2Fycy1tb2Rl/cm4taW50ZXJpb3It/c2VsZi1raW9zay1l/bGVjdHJpYy1hdXRv/bWF0aWMtbXVsdGlz/dG9yZXktcGFya2lu/Zy0yMjU0MzMzMzYu/anBn',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    category: 'Web App',
    live: '#',
    source: '#',
  },
  {
    title: 'Library Management System',
    description:
      'A powerful library system for managing books, members, issue/return cycles, and overdue tracking with admin dashboards.',
    image:
      'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=1740&q=80',
    tags: ['Angular', 'Express', 'MySQL'],
    category: 'Web App',
    live: '#',
    source: '#',
  },
  {
    title: 'Fitness Tracker App',
    description:
      'Track workouts, nutrition, and health goals with personalized plans in this cross-platform mobile app.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1740&q=80',
    tags: ['React Native', 'Redux', 'Firebase'],
    category: 'Mobile App',
    live: '#',
    source: '#',
  },
   {
    title: 'E-Commerce System',
    description:
      'A comprehensive e-commerce platform for buying and selling products with features like user authentication, product listings, and payment integration.',
    image:
      'https://imgs.search.brave.com/jmnPOESYnprLiKPAAsPBzYC-5CcirfhmacYHpOJufrE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZWNvbW1lcmNlLXdl/Yi1wYWdlLWNvbmNl/cHQtaWxsdXN0cmF0/aW9uXzExNDM2MC04/MjA0LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA',
    tags: ['React.js', 'Express', 'MySQL'],
    category: 'Web App',
    live: '#',
    source: '#',
  },
   {
    title: 'Quiz Game App',
    description:
      'A fun and interactive quiz game app built with React Native, featuring real-time multiplayer support and a variety of quiz categories.',
    image:
      'https://imgs.search.brave.com/-9mQfWpHD9bvfheGTwromU0vSJdtwMYB7aHPxiYrDW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MjUzMjI0ODgvZmls/ZS9vcmlnaW5hbC0w/N2EyMjFhNDNhNjAz/OTk4ODZiMTc4MGVk/MmY5Y2I2MC5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy',
    tags: ['React Native', 'Redux', 'Firebase'],
    category: 'Mobile App',
    live: '#',
    source: '#',
  },
];

const categories = ['All', 'Web App', 'Mobile App'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-[5%] bg-white dark:bg-gray-900 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A selection of my work that showcases my development capabilities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-100 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;