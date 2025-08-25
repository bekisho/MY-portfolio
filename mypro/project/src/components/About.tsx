import { Download, User, Code, Palette, Search } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Palette size={24} />, name: 'UI Design', tools: 'Figma, Adobe XD' },
    { icon: <Search size={24} />, name: 'UX Research', tools: 'Wireframing, User Testing' },
    { icon: <Code size={24} />, name: 'Prototyping', tools: 'Interactive Mockups' },
  
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile section */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src='./src/ast/beka.pro.jpg' // Better to place this image in the `public` folder
                  alt="Your Profile"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
          </div>

          {/* Content section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I’m Beka, a dedicated UI/UX designer with a background in IT (HNS). My career started in technology, 
              leading me to develop excellent problem-solving and technical skills, and eventually guiding me to realize my love for creating visually appealing digital experiences that are also intuitive to use. 
              I have spent all these years since that time developing my UI/UX design skills and I love to combine design and functionality – whether I’m designing visually interesting shadows of a button, or creating an entire user flow – I want to ensure that each detail reflects both beauty and usability. 
              My aim is to create a design that not only looks good but feels good to use.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-gray-800/25 transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800"
                >
                  <div className="text-blue-500 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tools}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="group bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-full font-mibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </button>
            </div>

            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 border-blue-500 dark:border-blue-400">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Design isn't just how it looks – it's how it works."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">— My Design Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;