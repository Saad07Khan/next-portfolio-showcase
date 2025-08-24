
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-teal-400 text-sm font-medium mb-4 tracking-wider uppercase">
            Contact
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
            say hello
          </h2>
          
          <div className="mb-12">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              I'm currently open to new opportunities and collaborations. Whether it's a potential project, an idea, or just to connect, feel free to reach out. I'll do my best to get back to you!
            </p>
            
            <a 
              href="mailto:saadmohammedhan7@gmail.com?subject=Portfolio Contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="mr-2">Send Email</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
