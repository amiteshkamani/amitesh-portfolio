import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" />
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary aspect-[4/3] flex items-center justify-center">
              <svg 
                className="w-1/2 h-1/2 text-white/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"/>
                <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">T-Shaped Marketing Professional</h3>
            <p className="mb-6 text-lg leading-relaxed">
              I am a passionate and strategic marketing professional bringing forth over 12 years of experience in both offline and online marketing. As a T-shaped marketer, I have diverse marketing experience in growth, strategy, analytics, and digital innovation.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Adept in analytical thinking, strategic planning, leadership, and building strong relationships. I thrive by creating solutions that align with business objectives.
            </p>
            <p className="mb-8 text-lg leading-relaxed">
              I now dedicate over 2 hours daily to yoga and meditation, which has enhanced my focus, creativity, and approach to problem-solving in my professional life.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:amiteshkamani.hbti@gmail.com" className="ml-3 hover:text-accent transition-colors">
                  amiteshkamani.hbti@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+31685554340" className="ml-3 hover:text-accent transition-colors">
                  +31 685554340
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a href="https://www.linkedin.com/in/amiteshkamani" target="_blank" rel="noopener noreferrer" className="ml-3 hover:text-accent transition-colors">
                  linkedin.com/in/amiteshkamani
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
