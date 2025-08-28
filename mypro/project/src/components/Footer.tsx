
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Beka</h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed max-w-md">
              UI/UX Designer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="mailto:beka@example.com"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="http://linkedin.com/in/beka-addisu-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="ttps://github.com/bekisho"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Work', 'Process', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>UI/UX Design</li>
              <li>User Research</li>
              <li>Prototyping</li>
              <li>Design Systems</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 Beka Fite. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-2 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;