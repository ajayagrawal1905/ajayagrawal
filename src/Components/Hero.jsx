import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
return (
    
    <section
        id="home"
        className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center overflow-hidden"
    >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#d1d5db_1px,transparent_1px)] before:bg-[length:20px_20px] before:animate-scrollGrid dark:before:bg-[radial-gradient(#4b5563_1px,transparent_1px)]" />

        <div className="relative container mx-auto max-w-7xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
            
            {/* Hero Text */}
            <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Rohit Agrawal</span>
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    Full Stack Developer
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                    I craft responsive websites and web applications that deliver pixel-perfect experiences with cutting-edge technologies.
                </p>

                {/* Call-to-Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition duration-300"
                        
                        rel="noopener noreferrer"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition duration-300"
                        
                        rel="noopener noreferrer"
                    >
                        Contact Me
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1vypp7jKZcWShIaC3s-cc2bhbAYebL-Yn/view?usp=sharing"
                        className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-5 pt-6">
                    <a
                        href="https://github.com/RohitAgrawal7"
                        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rohit-agrawal7/"
                        className="text-blue-700 hover:text-blue-800 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                    <a
                        href="https://twitter.com/rohit_agrawal7"
                        className="text-blue-400 hover:text-blue-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="mailto:rohitmagrawal.work@gmail.com"
                        className="text-gray-900 hover:text-gray-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Send Email"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width={20} height={20} fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.81A2.25 2.25 0 0 1 4.25 5.5h15.5c.98 0 1.8.64 2.09 1.54L12 13.56 2.01 6.81zm-.01 1.87v8.07c0 1.24 1.01 2.25 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25V8.68l-9.36 6.7a1 1 0 0 1-1.18 0L2 8.68z"/></svg>
                    </a>
                </div>
                </div>
            <div className="flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-lg">
                    <img
                        src="./PassportSize.jpg"
                        alt="Rohit Agrawal"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
);
};

export default Hero;