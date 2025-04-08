import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileNav from "./ui/mobile-nav";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="relative bg-primary text-white min-h-screen flex items-center">
      {/* Desktop Navigation */}
      <nav className={`hidden md:block fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="#">
            <span className="text-2xl font-bold cursor-pointer">AK</span>
          </Link>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
            <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
            <li><a href="#mindfulness" className="hover:text-accent transition-colors">Mindfulness</a></li>
            <li><a href="#interests" className="hover:text-accent transition-colors">Interests</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Amitesh Kamani
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl mb-6 text-accent"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Growth Marketing Manager
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 max-w-lg mx-auto md:mx-0"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A passionate and strategic marketing professional with over 12 years of diverse experience in growth, strategy, analytics, and digital innovation.
            </motion.p>
            <motion.div 
              className="flex space-x-4 justify-center md:justify-start"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="https://www.linkedin.com/in/amiteshkamani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-accent hover:text-white transition-colors px-6 py-3 rounded-full font-semibold inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white hover:bg-white hover:text-primary transition-colors px-6 py-3 rounded-full font-semibold"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <svg 
                className="w-full h-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"/>
                <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" fillOpacity="0.5"/>
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
