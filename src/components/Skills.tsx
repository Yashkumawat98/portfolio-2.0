import React, { useState } from 'react';
import { Code, Wrench, Database, Cloud, Globe, Terminal } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: <Code className="w-5 h-5" />,
      color: isDark ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-purple-500',
      skills: [
        { name: 'JavaScript', level: 85, description: 'Modern ES6+ features, async/await, DOM manipulation' },
        { name: 'Python', level: 80, description: 'Data analysis, automation scripts, web development' }
      ]
    },
    {
      id: 'tools',
      name: 'DevOps Tools',
      icon: <Wrench className="w-5 h-5" />,
      color: isDark ? 'from-green-500 to-emerald-500' : 'from-green-500 to-teal-500',
      skills: [
        { name: 'Linux', level: 85, description: 'System administration, shell scripting, server management' },
        { name: 'Docker', level: 75, description: 'Containerization, multi-stage builds, orchestration' },
        { name: 'Jenkins', level: 70, description: 'CI/CD pipelines, automated testing, deployment' },
        { name: 'Kubernetes', level: 65, description: 'Container orchestration, scaling, service mesh' }
      ]
    },
    {
      id: 'data',
      name: 'Data Science',
      icon: <Database className="w-5 h-5" />,
      color: isDark ? 'from-purple-500 to-pink-500' : 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 80, description: 'NumPy, Pandas, Matplotlib for data analysis' },
        { name: 'Jupyter', level: 85, description: 'Interactive notebooks, data visualization' },
        { name: 'ML Basics', level: 70, description: 'Scikit-learn, basic algorithms, model evaluation' }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & Web',
      icon: <Cloud className="w-5 h-5" />,
      color: isDark ? 'from-orange-500 to-red-500' : 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 70, description: 'EC2, S3, Lambda, CloudFormation basics' },
        { name: 'Flask', level: 75, description: 'RESTful APIs, templating, database integration' },
        { name: 'REST APIs', level: 80, description: 'API design, authentication, documentation' }
      ]
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
                ? 'from-green-400 to-cyan-400' 
                : 'from-green-600 to-blue-600'
            }`}>
              Skills & Technologies
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive toolkit spanning multiple domains of modern technology
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.id} direction="left" delay={200 + categoryIndex * 150} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <AnimatedSection 
                    key={index} 
                    direction="right" 
                    delay={400 + categoryIndex * 150 + index * 100}
                    className={`group p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      isDark 
                        ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-400/50' 
                        : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-blue-400/50'
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`font-semibold ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredSkill === skill.name && (
                      <div className={`mt-3 p-3 rounded-lg text-sm transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-700/80 text-gray-300' 
                          : 'bg-gray-100/80 text-gray-600'
                      }`}>
                        {skill.description}
                      </div>
                    )}
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;