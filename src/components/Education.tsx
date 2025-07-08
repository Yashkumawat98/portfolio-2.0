import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface EducationProps {
  isDark: boolean;
}

const Education: React.FC<EducationProps> = ({ isDark }) => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Arya College of Engineering',
      location: 'Jaipur, Rajasthan',
      period: 'Pursuing',
      status: 'current',
      grade: 'In Progress',
      description: 'Focusing on computer science fundamentals, software engineering, and modern technologies including DevOps and data science.',
      highlights: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Database Management', 'Software Engineering', 'Web Development'],
      color: isDark ? 'from-blue-500 to-purple-500' : 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate',
      field: 'Science Stream',
      institution: 'Senior Secondary School',
      location: 'Jaipur, Rajasthan',
      period: 'Completed',
      status: 'completed',
      grade: '56%',
      description: 'Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.',
      highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'English'],
      color: isDark ? 'from-green-500 to-teal-500' : 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      degree: 'Secondary School Certificate',
      field: 'General Education',
      institution: 'Secondary School',
      location: 'Jaipur, Rajasthan',
      period: 'Completed',
      status: 'completed',
      grade: '57%',
      description: 'Completed secondary education with solid academic performance across all subjects.',
      highlights: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
      color: isDark ? 'from-cyan-500 to-blue-500' : 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <AnimatedSection direction="up" delay={100} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-purple-400 to-pink-400' 
                : 'from-purple-600 to-pink-600'
            }`}>
              Education
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Academic journey building strong foundations in computer science and technology
          </p>
        </AnimatedSection>

        {/* Horizontal Timeline */}
        <AnimatedSection direction="left" delay={300} className="relative">
          {/* Timeline Line */}
          <div className={`absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500' 
              : 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500'
          } rounded-full`}></div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((item, index) => (
              <AnimatedSection key={item.id} direction="up" delay={500 + index * 200} className="relative">
                <div>
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 ${
                    isDark ? 'border-gray-900' : 'border-white'
                  } ${item.status === 'current' ? 'animate-pulse' : ''}`}></div>
                </div>

                {/* Content Card */}
                <div className={`mt-16 p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20' 
                    : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20'
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      {item.status === 'current' && (
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className={`text-xs font-medium ${
                            isDark ? 'text-green-400' : 'text-green-600'
                          }`}>
                            Current
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.degree}
                      </h3>
                      <p className={`font-medium ${
                        isDark ? 'text-cyan-400' : 'text-blue-600'
                      }`}>
                        {item.field}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4" />
                        <span>{item.institution}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <Award className="w-4 h-4" />
                        <span className="font-medium">{item.grade}</span>
                      </div>
                    </div>

                    <p className={`text-sm leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className={`text-sm font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Key Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.slice(0, 3).map((highlight, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs rounded border transition-colors duration-200 ${
                              isDark 
                                ? 'bg-gray-700 text-gray-300 border-gray-600 hover:border-cyan-400/50' 
                                : 'bg-gray-100 text-gray-600 border-gray-300 hover:border-blue-400/50'
                            }`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${item.color} rounded-xl transition-opacity duration-300`}></div>
                </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Achievement Summary */}
        <AnimatedSection direction="up" delay={1100} className="mt-16 grid md:grid-cols-3 gap-6">
          <div className={`text-center p-6 rounded-xl border ${
            isDark 
              ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' 
              : 'bg-white/50 backdrop-blur-sm border-gray-200'
          }`}>
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              57%
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Class X Score
            </p>
          </div>
          <div className={`text-center p-6 rounded-xl border ${
            isDark 
              ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' 
              : 'bg-white/50 backdrop-blur-sm border-gray-200'
          }`}>
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-green-400' : 'text-green-600'
            }`}>
              56%
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Class XII Score
            </p>
          </div>
          <div className={`text-center p-6 rounded-xl border ${
            isDark 
              ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' 
              : 'bg-white/50 backdrop-blur-sm border-gray-200'
          }`}>
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              B.Tech
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Currently Pursuing
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;