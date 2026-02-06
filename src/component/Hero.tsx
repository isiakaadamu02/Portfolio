import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import HeroImage from "../assets/paperPlan.jpg";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const keywords = [
    'React.js',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Responsive Design',
    'UI/UX'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        //   filter: 'blur(8px)',
          transform: 'scale(1.1)', // Prevents blur edges from showing
        }}
      />

      {/* Dark Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8  animate-fadeInUp">
            <h1 className="  font-light tracking-tight mb-6 leading-tight">
             <span className="text-blue-600 text-5xl md:text-7xl">
            Isiaka Adamu</span>
            </h1>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
            Frontend Developer<br />
            <span className="text-blue-600 ">UI Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Crafting responsive web experiences with React, TypeScript, and modern design principles
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 mb-10">
            {keywords.map((keyword) => (
              <span key={keyword} className="px-3 py-1 bg-blue-500 text-white rounded-full">
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12  animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-blue-600 rounded-lg hover:border-gray-400 transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6  animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:isiakaadamu161@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-16 animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}