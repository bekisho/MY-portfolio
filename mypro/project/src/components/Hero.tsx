import { ArrowRight,} from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img
                  src="./src/ast/myph.JPG"  // profile images 
                  alt="Beka Fite - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-yellow-400 rounded-full opacity-40 animate-bounce delay-500"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-blue-500 dark:text-blue-400">Beka</span> —
              <br />a UI/UX Designer
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I design clean, user-focused websites and apps with a blend of creativity and strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={scrollToWork}
                className="group bg-blue-500 dark:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToContact}
                className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
        
        {/* Professional Badge */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              ✨ Available for freelance projects
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;