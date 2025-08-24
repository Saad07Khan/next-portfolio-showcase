
const Experience = () => {
  const experiences = [
    {
      company: "Kineton",
      role: "Software Development Intern", 
      period: "Jan 2025 - May 2025",
      description: "-Designed and implemented a robust backend using Flask, ensuring efficient handling of APIs and database interactions and created RESTful API endpoints for seamless communication between the client and server\n- Integrated a modern front-end using Next.js with Tailwind CSS, delivering a responsive and visually appealing user interface"
    },
    {
      company: "InfoTact Solutions",
      role: "Associate L1",
      period: "May 2025 - Present", 
      description: "-Developed clean, efficient, and maintainable code using Next.js React.js, and Node.js.\n\n-Created and maintained technical documentation for codebases, APIs, workflows, and system designs to ensure clarity and scalability."
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-teal-400 text-sm font-medium mb-4 tracking-wider uppercase">
            The companies I've worked with
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border-l-2 border-slate-700 pl-8 pb-12 relative group hover:border-teal-400 transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-teal-400 font-medium">
                    {exp.role}
                  </p>
                </div>
                <div className="text-slate-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              
              <div className="text-slate-300 leading-relaxed max-w-3xl">
                {exp.description.split('\n').map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://drive.google.com/file/d/1bR3qxHpoVV-dA12_nmAnfLgOWFT35Z4x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-teal-400 text-teal-400 font-medium rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
