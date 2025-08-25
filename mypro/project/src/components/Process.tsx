import { Search, Layers, Palette, Play, TestTube, Code } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search size={32} />,
      title: 'Discovery & Research',
      description: 'Understanding user needs, business goals, and market opportunities through research and analysis.'
    },
    {
      icon: <Layers size={32} />,
      title: 'Wireframing',
      description: 'Creating low-fidelity layouts to establish information architecture and user flow.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Visual Design',
      description: 'Developing high-fidelity designs with color, typography, and visual hierarchy.'
    },
    {
      icon: <Play size={32} />,
      title: 'Prototyping',
      description: 'Building interactive prototypes to test and validate design concepts.'
    },
    {
      icon: <TestTube size={32} />,
      title: 'Testing & Feedback',
      description: 'Conducting user testing sessions and iterating based on feedback and insights.'
    },
    {
      icon: <Code size={32} />,
      title: 'Developer Handoff',
      description: 'Preparing detailed specifications and assets for seamless development implementation.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Design Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A systematic approach to creating user-centered designs that solve real problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="text-blue-500 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;