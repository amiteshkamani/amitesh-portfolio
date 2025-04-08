import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Amitesh Kamani</h2>
            <p>Growth Marketing Manager</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/amiteshkamani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/amiteshkamani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:amiteshkamani.hbti@gmail.com" 
              className="text-white hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} Amitesh Kamani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
