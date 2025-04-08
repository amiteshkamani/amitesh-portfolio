import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { Brain, Scale, Coffee } from "lucide-react";

export default function Mindfulness() {
  return (
    <section id="mindfulness" className="py-20 bg-accent text-white relative">
      <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10 pattern-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Mindfulness Journey" textColor="text-white" lineColor="bg-white" />
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Daily Practice</h3>
            <p className="mb-6 text-lg leading-relaxed">
              I now dedicate over 2 hours daily to yoga and meditation, a practice that has transformed both my personal and professional life. This commitment to mindfulness has enhanced my:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Mental Clarity</h4>
                  <p>Improved focus and decision-making capabilities in high-pressure business environments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Creative Problem Solving</h4>
                  <p>Developed a more intuitive approach to complex marketing challenges and strategy development.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Work-Life Balance</h4>
                  <p>Achieved greater harmony between professional ambitions and personal well-being.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-16 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg overflow-hidden bg-primary/20 aspect-square flex items-center justify-center">
              <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5714 15.0036C15.8309 15.0036 16.8571 13.9773 16.8571 12.7179C16.8571 11.4584 15.8309 10.4322 14.5714 10.4322C13.312 10.4322 12.2857 11.4584 12.2857 12.7179C12.2857 13.9773 13.312 15.0036 14.5714 15.0036Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.42856 21.1465C10.6881 21.1465 11.7143 20.1203 11.7143 18.8608C11.7143 17.6013 10.6881 16.5751 9.42856 16.5751C8.16906 16.5751 7.14285 17.6013 7.14285 18.8608C7.14285 20.1203 8.16906 21.1465 9.42856 21.1465Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5714 8.86063C15.8309 8.86063 16.8571 7.83442 16.8571 6.57492C16.8571 5.31541 15.8309 4.28921 14.5714 4.28921C13.312 4.28921 12.2857 5.31541 12.2857 6.57492C12.2857 7.83442 13.312 8.86063 14.5714 8.86063Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.42857 8.86063C10.688 8.86063 11.7143 7.83442 11.7143 6.57492C11.7143 5.31541 10.688 4.28921 9.42857 4.28921C8.16907 4.28921 7.14286 5.31541 7.14286 6.57492C7.14286 7.83442 8.16907 8.86063 9.42857 8.86063Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.7143 15.0036C20.9738 15.0036 22 13.9773 22 12.7179C22 11.4584 20.9738 10.4322 19.7143 10.4322C18.4548 10.4322 17.4286 11.4584 17.4286 12.7179C17.4286 13.9773 18.4548 15.0036 19.7143 15.0036Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.28571 15.0036C5.54522 15.0036 6.57143 13.9773 6.57143 12.7179C6.57143 11.4584 5.54522 10.4322 4.28571 10.4322C3.02621 10.4322 2 11.4584 2 12.7179C2 13.9773 3.02621 15.0036 4.28571 15.0036Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5714 15.0036C14.5714 16.898 13.8446 18.7151 12.5516 20.0081C11.2587 21.3011 9.44153 22.0279 7.54715 22.0279" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.54715 3.4082C9.44153 3.4082 11.2587 4.1349 12.5516 5.42785C13.8446 6.7208 14.5714 8.53801 14.5714 10.4324" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.28571 10.4318C4.28571 8.53745 5.01249 6.72024 6.30544 5.42729C7.59839 4.13434 9.4156 3.40756 11.3099 3.40756" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.3099 22.0278C9.4156 22.0278 7.59839 21.301 6.30544 20.0081C5.01249 18.7151 4.28571 16.8979 4.28571 15.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5714 10.4318C14.5714 8.53745 15.2982 6.72024 16.5912 5.42729C17.8841 4.13434 19.7013 3.40756 21.5957 3.40756" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.5957 22.0278C19.7013 22.0278 17.8841 21.301 16.5912 20.0081C15.2982 18.7151 14.5714 16.8979 14.5714 15.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="rounded-lg overflow-hidden bg-primary/20 aspect-square flex items-center justify-center">
              <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="rounded-lg overflow-hidden col-span-2 bg-primary/20 aspect-video flex items-center justify-center">
              <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <q className="text-xl md:text-2xl italic block mb-4">Yoga is the journey of the self, through the self, to the self.</q>
          <p className="font-semibold">- The Bhagavad Gita</p>
        </motion.div>
      </div>
    </section>
  );
}
