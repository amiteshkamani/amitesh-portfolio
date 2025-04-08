import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden fixed top-0 w-full z-50">
      <div className={`px-4 py-3 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-primary/90' : 'bg-transparent'}`}>
        <a href="#" className="text-xl font-bold">AK</a>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="bg-primary w-full py-4 shadow-lg animate-fadeDown">
          <ul className="flex flex-col space-y-3 px-4">
            <li><a href="#about" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>About</a></li>
            <li><a href="#experience" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Experience</a></li>
            <li><a href="#skills" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Skills</a></li>
            <li><a href="#mindfulness" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Mindfulness</a></li>
            <li><a href="#interests" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Interests</a></li>
            <li><a href="#contact" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
