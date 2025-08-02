import React, { useState, useEffect } from 'react';
import {
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaMedal,
  FaEthereum,
  FaBitcoin,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  SiSolidity,
  SiWeb3Dotjs,
  SiTypescript,
  SiSpring,
  SiMicrogenetics,
  SiApachekafka,
  SiElasticsearch,
  SiMysql,
  SiPostgresql,
  // SiCassandra,
  // SiOpenshift,
  SiPivotaltracker,
  SiJenkins,
  SiPostman,
  SiJunit5,
  SiSonarqube,
  SiHtml5,
  SiCss3,
  SiJavascript,
  // SiJava
} from 'react-icons/si';

const About = () => {
  // State for animated stats
  const [yearsExp, setYearsExp] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);
  
  // Tech stack items with icons
  const techStack = [
    // { icon: <FaJava className="text-red-600" />, name: "Java" },
  { icon: <SiSpring className="text-green-700" />, name: "Spring Boot" },
  { icon: <SiMicrogenetics className="text-green-500" />, name: "Microservices" },
  { icon: <SiApachekafka className="text-orange-600" />, name: "Kafka" },
  { icon: <SiElasticsearch className="text-blue-400" />, name: "Elasticsearch" },
  { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
  { icon: <SiPostgresql className="text-blue-800" />, name: "PostgreSQL" },
  // { icon: <SiCassandra className="text-purple-600" />, name: "Cassandra" },
  { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
  // { icon: <SiOpenshift className="text-red-700" />, name: "OpenShift" },
  { icon: <SiPivotaltracker className="text-green-600" />, name: "PCF" },
  { icon: <SiJenkins className="text-red-600" />, name: "Jenkins" },
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
  { icon: <FaGithub className="text-black" />, name: "GitHub" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <SiJunit5 className="text-green-500" />, name: "JUnit" },
  { icon: <SiSonarqube className="text-indigo-600" />, name: "SonarQube" },
  { icon: <SiHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <SiCss3 className="text-blue-600" />, name: "CSS3" },
  { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
  ];

  // Animate stats on component mount
  useEffect(() => {
    const animateStats = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count <= 5) setYearsExp(count);
        if (count <= 20) setProjects(count);
        if (count <= 4) setClients(count);
        if (count <= 5) setAwards(count);
        
        count++;
        if (count > 50) clearInterval(interval);
      }, 20);
    };

    animateStats();
  }, []);

  return (
    <section id="about" className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300 max-w-2xl mx-auto">
              Innovative Java Full Stack Developer with expertise in Java 11+, Spring Boot & Microservices.
            </p>
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <p className="mb-4">
                Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Ajay Agrawal</span>, a passionate Full Stack Developer and Blockchain Engineer based in India with <span className="font-bold">{yearsExp}+ years</span> of experience building robust web applications and decentralized solutions.
              </p>
              
              <p className="mb-4">
                I specialize in <span className="font-semibold text-indigo-600 dark:text-indigo-400">JavaScript, React, Node.js</span>, and modern blockchain technologies. My journey began during college, where I discovered my passion for creating innovative solutions that solve real-world problems.
              </p>
              
              <p className="mb-4">
                Over the past few years, I've developed a strong expertise in <span className="font-semibold text-indigo-600 dark:text-indigo-400">Web3 development</span>, building decentralized applications (dApps) on Ethereum, Polygon, and other EVM-compatible chains. I have hands-on experience with Solidity, smart contract development, and integrating blockchain functionality into web applications.
              </p>
              
              <p className="mb-4">
                When I'm not coding, I explore new technologies, contribute to open-source projects, and share knowledge through technical blogs and tutorials. I believe in lifelong learning and continuously evolving with the rapidly changing tech industry.
              </p>
              
              <p>
                My goal is to build solutions that not only meet business needs but deliver <span className="font-semibold text-indigo-600 dark:text-indigo-400">real value</span> to users while pushing the boundaries of what's possible with blockchain technology.
              </p>
            </motion.div>
            
            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <FaCode className="mr-2 text-indigo-600" /> Technical Expertise
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <FaCode className="text-indigo-600 dark:text-indigo-400" />,
                  label: 'Years Experience',
                  value: yearsExp,
                  suffix: '+'
                },
                {
                  icon: <FaProjectDiagram className="text-indigo-600 dark:text-indigo-400" />,
                  label: 'Projects Completed',
                  value: projects,
                  suffix: '+'
                },
                {
                  icon: <FaUsers className="text-indigo-600 dark:text-indigo-400" />,
                  label: 'Happy Clients',
                  value: clients,
                  suffix: '+'
                },
                {
                  icon: <FaMedal className="text-indigo-600 dark:text-indigo-400" />,
                  label: 'Awards Received',
                  value: awards,
                  suffix: '+'
                }
              ].map(({ icon, label, value, suffix }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                    {value}{suffix}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 text-center">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Blockchain Expertise */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 shadow-lg text-white"
            >
              <div className="flex items-start mb-4">
                <FaEthereum className="text-3xl mr-3 text-white" />
                <div>
                  <h3 className="text-xl font-bold">Java 11+ Spring Boot & Microservices Expertise</h3>
                  <p className="text-indigo-100">Specialized in Banking solutions</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <span>RESTFul API's Development (Solidity)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <span>DeFi & NFT Application Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <span>Ethereum, Polygon, Binance Smart Chain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <span> Web3.js, Ethers.js, Hardhat</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <span>Tokenomics & DAO Architecture</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Certifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-3">
                    <FaMedal className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Certified Blockchain Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Blockchain Council, 2022</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-3">
                    <FaMedal className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">AWS Certified Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Amazon Web Services, 2021</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-3">
                    <FaMedal className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">React Advanced Concepts</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Frontend Masters, 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;