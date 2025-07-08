import React from 'react';
import { Code, ExternalLink, Github, Calendar, Users, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      id: 1,
      title: 'E.Hospital',
      description: 'A comprehensive hospital management application providing seamless bed booking and doctor appointment scheduling for patients and healthcare providers.',
      status: 'featured',
      timeline: 'Current Project',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Healthcare App',
      features: [
        'Hospital bed booking system',
        'Doctor appointment scheduling',
        'Patient management dashboard',
        'Real-time availability tracking'
      ],
      color: 'from-green-500 to-teal-500',
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <AnimatedSection direction="up" delay={100} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-cyan-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            }`}>
              Projects
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Building innovative solutions that make a real-world impact
          </p>
        </AnimatedSection>

        {/* Featured Project */}
        <AnimatedSection direction="left" delay={300} className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className={`group p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20' 
                : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20'
            }`}>
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`font-medium ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`}>
                    {project.timeline}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Features:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className={`text-sm font-medium mb-3 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors duration-200 ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300 border-gray-600 hover:border-cyan-400/50' 
                          : 'bg-gray-100 text-gray-600 border-gray-300 hover:border-blue-400/50'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}>
                  <ExternalLink className="w-4 h-4" />
                  <span>View Project</span>
                </button>
                <button className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50' 
                    : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                }`}>
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </button>
              </div>

              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${project.color} rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </AnimatedSection>

        {/* Coming Soon Note */}
        <AnimatedSection direction="up" delay={600} className="mt-12 text-center">
          <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border ${
            isDark 
              ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' 
              : 'bg-white/50 backdrop-blur-sm border-gray-200'
          }`}>
            <Code className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-blue-500'}`} />
            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              More exciting projects coming soon!
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;