const Education = () => {
  const education = [
    {
      degree: 'BTech Computer Science and Engineering with specialization in Bio Informatics',
      institution: 'Vellore Institute of Technology',
      period: '2021 - 2025',
      description: 'CGPA: 8.71'
    },
  ];

  return (
    <section id="education" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-teal-400 text-sm font-medium mb-4 tracking-wider uppercase">
            My Academic Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="border-l-2 border-slate-700 pl-8 pb-12 relative group hover:border-teal-400 transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-slate-400 font-medium mt-2 md:mt-0">
                  {edu.period}
                </div>
              </div>
              
              <p className="text-slate-300 whitespace-pre-line">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
