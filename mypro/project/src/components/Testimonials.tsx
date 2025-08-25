import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechFlow Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      quote: 'Beka transformed our user experience completely. Her attention to detail and user-centered approach resulted in a 40% increase in user engagement. Absolutely brilliant work!'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      quote: 'Working with Beka was incredible. She not only delivered beautiful designs but also understood our business goals and user needs perfectly. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthLabs',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      quote: 'Beka\'s design process is thorough and professional. She delivered exactly what we needed and exceeded our expectations. Our conversion rates improved significantly.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">What Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Don't just take my word for it - here's what my clients have to say about working with me.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 dark:text-yellow-500 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-center">
                <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl dark:hover:shadow-gray-900/50 transition-shadow"
          >
            <ChevronLeft size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl dark:hover:shadow-gray-900/50 transition-shadow"
          >
            <ChevronRight size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-blue-500 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;