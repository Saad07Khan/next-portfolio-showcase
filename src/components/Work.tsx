
const Work = () => {
  const projects = [
    {
      category: "Web Application",
      title: "Event Connect",
      description: "EventConnect is a Next.js web application with MongoDB database, Google OAuth authentication, and TailwindCSS styling. It uses AI-powered email scraping to discover and manage events, featuring a modern dashboard interface with email integration via Nodemailer.",
      image: "/econnect.png",
      demoLink: "https://eventconnect7s-bq43jsql0-saad-mohammeds-projects.vercel.app/",
      githubLink: "https://github.com/Saad07Khan/Event_Connect"
    },
    {
      category: "Web Application", 
      title: "URL Shortener",
      description: "MERN Stack URL Shortener built with React TypeScript frontend using Tailwind CSS and Vite, Express.js TypeScript backend with MongoDB Mongoose ODM, nanoid for URL generation, and Axios for API communication.",
      image: "/url.png",
      demoLink: "https://drive.google.com/file/d/1JQROPrFuiHa8SRXS75iz8CrNtMsLsGBL/view?usp=sharing",
      githubLink: "https://github.com/Saad07Khan/url-shortner-app"
    },
    {
      category: "Web Application",
      title: "PassSafe",
      description: "Password Manager is a full-stack web application built with React.js frontend styled with Tailwind CSS, and powered by a Node.js/Express.js backend that connects to MongoDB for data persistence. The application features password management functionality with a modern UI, toast notifications, and RESTful API endpoints for CRUD operations on stored passwords.",
      image: "/passsafe.png",
      demoLink: "https://drive.google.com/file/d/1onqCZjRFP-ikCIbKQXzJpTjDKcoNHaC3/view?usp=sharing",
      githubLink: "https://github.com/Saad07Khan/passwordmanager/tree/main"
    },
    {
      category: "Machine Learning",
      title: "ML/DL-based Intrusion Detection System",
      description: "This project uses pandas, numpy, seaborn, matplotlib, scikit-learn, imbalanced-learn, TensorFlow, Keras, and Optuna to process the CIC-IDS2017 dataset. It applies autoencoder-based dimensionality reduction and compares CNN, LSTM, and hybrid CNN-LSTM models, employing dropout, L2 regularization, batch normalization, early stopping, and learning rate scheduling for improved generalization.",
      image: "/cnlstm.png",
      githubLink: "https://github.com/Saad07Khan/Intrusion-Detection-System"
    },
    /* Commenting out for now
    {
      category: "Web Development",
      title: "newyork magazine", 
      description: "Sed eget ultrices tortor. Aenean non enim nulla. Vivamus vel pharetra sem. Etiam et viverra ex. Mauris efficitur lobortis condimentum. Suspendisse turpis lorem. Nullam non nunc in magna mattis aliquet. Praesent fringilla felis ut pretium convallis.",
      image: "/api/placeholder/600/400",
      demoLink: "#",
      githubLink: "#"
    }
    */
  ];

  return (
    <section id="work" className="min-h-screen py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-teal-400 text-sm font-medium mb-4 tracking-wider uppercase">
            Some things I've built
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            my work
          </h2>
          <div className="max-w-4xl">
            <p className="text-xl text-slate-300 leading-relaxed">
              I am a Web Developer and AI/ML enthusiast.  I specialize in full-stack development using React.js, Next.js, Node.js, MongoDB, and Flask. Over the past few years, I've contributed to projects ranging from password management applications to event organization platforms. I am looking collaborate with startups and organizations to design responsive, scalable web applications, focusing on intuitive UI and efficient backend performance.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
            >
              <div className="flex-1">
                <div className="aspect-video bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg overflow-hidden group cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain object-left group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-teal-400 text-sm font-medium mb-2 tracking-wider uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                    >
                      <span className="mr-2">Live Demo</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                  >
                    <span className="mr-2">GitHub</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
