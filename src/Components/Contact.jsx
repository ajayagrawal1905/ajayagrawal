import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
const handleSubmit = async e => {
  e.preventDefault();
  setLoading(true);
  setSuccessData(null);
  setErrorMsg('');
  setConfirmationSent(false);

  try {
    const response = await fetch("https://formspree.io/f/manjkpbv", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccessData({ ...formData });
      setConfirmationSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      const errorText = result?.errors?.[0]?.message || "Failed to send message.";
      setErrorMsg(errorText);
    }
  } catch (err) {
    console.error("Formspree Error:", err);
    setErrorMsg('An unexpected error occurred. Please try again.');
  } finally {
    setLoading(false);
  }
};
  // Auto-close success panel after 8 seconds
  useEffect(() => {
    if (successData) {
      const timer = setTimeout(() => {
        setSuccessData(null);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [successData]);

  return (
    <section id="contact" className="py-[5%] bg-white dark:bg-gray-900 transition-all">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">I'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 dark:text-gray-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Let's talk about everything!</h3>
            <p>Reach out if you have a project in mind, want to collaborate, or just want to say hi.</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>RohitmAgrawal.work@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+91 9579767372</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Aurangabad, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form and Submission Details */}
          <div className="relative">
            {successData ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-gray-800 border border-green-200 dark:border-green-800/50 rounded-xl p-6 shadow-lg"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                    <FaCheck className="text-green-600 dark:text-green-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-4">Message Sent Successfully!</h3>
                  <p className="text-green-600 dark:text-green-400 mt-1">
                    {confirmationSent ? "Confirmation email sent to your inbox" : "Processing confirmation email..."}
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between pb-2 border-b border-green-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Name:</span>
                    <span className="font-medium text-gray-800 dark:text-white">{successData.name}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-green-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Email:</span>
                    <span className="font-medium text-gray-800 dark:text-white">{successData.email}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-green-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Subject:</span>
                    <span className="font-medium text-gray-800 dark:text-white">{successData.subject}</span>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Message:</p>
                    <div className="bg-white dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <p className="text-gray-800 dark:text-gray-200">{successData.message}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button 
                    onClick={() => setSuccessData(null)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-md transition-colors"
                  >
                    Send Another Message
                  </button>
                  <button 
                    onClick={() => window.location = `mailto:${successData.email}`}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                  >
                    Reply via Email
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4"
                  >
                    <div className="flex items-center">
                      <FaTimes className="text-red-500 mr-2 flex-shrink-0" />
                      <p className="text-red-700 dark:text-red-300">{errorMsg}</p>
                    </div>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all relative overflow-hidden"
                >
                  {loading && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 8, ease: 'linear' }}
                      className="absolute top-0 left-0 h-full bg-indigo-700/30"
                    />
                  )}
                  <span className="relative z-10">
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;