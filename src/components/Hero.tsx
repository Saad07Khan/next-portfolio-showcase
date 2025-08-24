import { useState, useEffect } from 'react';

const Hero = () => {
  const patternSvg = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'saad khan';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div 
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: `url("${patternSvg}")` }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <p className="text-teal-400 text-lg font-medium mb-4 tracking-wider uppercase">Hello</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            my name is<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
            Full-stack developer and AI/ML enthusiast specializing full stack development using React, Next.js, Node.js, MongoDB, Flask seeking startup and organization collaborations to build responsive, scalable apps with intuitive UIs and efficient backends.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-medium rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute left-8 bottom-8 hidden md:flex flex-col space-y-6">
        <a 
          href="https://www.linkedin.com/in/saad-khan-849459230/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-teal-400 transition-colors"
          aria-label="LinkedIn"
        >
          <div className="w-6 h-6 border border-current flex items-center justify-center">
            <span className="text-xs font-bold">in</span>
          </div>
        </a>
        <a 
          href="https://github.com/Saad07Khan" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-teal-400 transition-colors"
          aria-label="GitHub"
        >
          <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.84 9.49.5.09.68-.22.68-.49v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.93.68 1.87v2.77c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </div>
        </a>
      </div>


    </section>
  );
};

export default Hero;
