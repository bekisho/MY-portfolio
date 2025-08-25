import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  tools: string;
  description: string;
  image: string;
  details: string;
  results: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Mill Online Shop (Mobile E-commerce App)',
      tools: 'Figma, Prototyping',
      description: 'A personalized mobile commerce app with smart search.',
      image: 'src/ast/beka.pro 1.png',
      details: 'A personalized mobile commerce app with smart search, clean product grid, and bottom navigation. Designed for ease of browsing and fast purchases on the go, and delivered high-fidelity prototypes.',
      results: '40% increase in conversion rate, 60% reduction in checkout abandonment'
    },
    {
      id: 2,
      title: 'Sneaker Shopping App (Nike UI)',
      tools: 'Figma, User Interfaces Design',
      description: 'Created a sleek and contemporary e-commerce UI for sneakerheads.',
      image: 'src/ast/beka.pro 2.png',
      details: ' Created a sleek and contemporary e-commerce UI for sneakerheads. Prioritized simple product discovery through minimal categories, a visible search bar, and engaging features such as wishlist and cart icons. Prioritized clean design, bold brand imagery (Nike), and adaptive navigation to maximize user shopping experience.',
      results: '50% improvement in task completion time, 85% user satisfaction score'
    },
    {
      id: 3,
      title: 'Book Library & Recommendation App',
      tools: 'Webflow, Responsive Design',
      description: 'Developed a user-centered library app UI enabling users to discover, search, and save books according to interests.',
      image: 'src/ast/beka.pro 3.png',
      details: 'Developed a user-centered library app UI enabling users to discover, search, and save books according to interests. Focused on accessibility and interactivity with vibrant visuals and personalized recommendation categories such as "For You" and "Recommends."',
      results: 'WCAG AA compliance achieved, 90% user task success rate'
    },
    {
      id: 4,
      title: ' Video Editing Service App (VisionCraft)',
      tools: 'Figma, Prototyping',
      description: 'Created a modern dark-themed UI for an innovative service platform that provides video editing,',
      image: 'src/ast/beka.pro 4.png',
      details: 'Created a modern dark-themed UI for an innovative service platform that provides video editing, color grading, and motion graphics. The interface prioritizes service discovery, user rewards, as well as promotion banners, adding value to the business and motivating users.',
      results: '95% user retention rate, 4.8/5 app store rating'
    },
    {
      id: 5,
      title: 'VisionCraft (Creative Agency Website)',
      tools: 'Figma User Research',
      description: 'A modern portfolio site for a creative agency showcasing design projects and services.',
      image: 'src/ast/beka.pro 51.png',
      details: 'A modern portfolio site for a video editing business. It features services, client works, and collaborations with a comprehensible layout and engaging visuals.',
      results: '70% increase in course completion, 80% improvement in engagement'
    },
    {
      id: 6,
      title: ' BRIDGE Watch (Desktop E-commerce)',
      tools: 'Figma,',
      description: 'A high-end watch store homepage with simple design,',
      image: 'src/ast/beka.pro 6 (1).png',
      details: 'A high-end watch store homepage with simple design, product focus, and promotional elements. It boasts clear visual hierarchy and user-friendly shopping navigation.',
      results: '45% increase in bookings, 65% improvement in user satisfaction'
    }
  ];

  const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-blue-500 font-medium mb-6">{project.tools}</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Project Overview</h4>
                <p className="text-gray-600 leading-relaxed">{project.details}</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Results</h4>
                <p className="text-gray-600 leading-relaxed">{project.results}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a selection of projects that showcase my design process and problem-solving approach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-3">{project.tools}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-blue-500 dark:text-blue-400 font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    View Case Study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Work;