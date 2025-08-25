import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Work />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;