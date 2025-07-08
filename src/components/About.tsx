import React, { useState, useEffect } from 'react';
import { GraduationCap, Code, Server, BarChart3, Upload, User } from 'lucide-react';
import ProfilePicture from './ProfilePicture';
import AnimatedSection from './AnimatedSection';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const timeline = [
    {
      year: 'Class X',
      achievement: '57%',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Foundation years building academic discipline'
    },
    {
      year: 'Class XII',
      achievement: '56%',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Science stream with focus on mathematics and computer science'
    },
    {
      year: 'B.Tech CSE',
      achievement: 'Pursuing',
      icon: <Code className="w-6 h-6" />,
      description: 'Computer Science Engineering at Arya College, Jaipur'
    },
    {
      year: 'DevOps Journey',
      achievement: 'Ongoing',
      icon: <Server className="w-6 h-6" />,
      description: 'Passionate about automation, Linux, and cloud technologies'
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
                ? 'from-cyan-400 to-blue-500' 
                : 'from-blue-600 to-purple-600'
            }`}>
              About Me
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm a passionate Computer Science student with a deep fascination for DevOps automation, 
            cloud technologies, and data science. My journey combines hands-on learning with practical 
            exploration of cutting-edge technologies like Linux, Docker, and machine learning tools.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Picture Section */}
          <AnimatedSection direction="left" delay={200} className="lg:col-span-1 flex flex-col items-center">
            <ProfilePicture 
              isDark={isDark} 
              size="large" 
              showUpload={true}
              className="mb-6"
            />

            {/* Quick Stats */}
            <div className="space-y-3 text-center">
              <div className={`p-3 backdrop-blur-sm rounded-lg border ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/50 border-gray-200'
              }`}>
                <div className={`font-bold text-lg ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>B.Tech CSE</div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Pursuing</div>
              </div>
              <div className={`p-3 backdrop-blur-sm rounded-lg border ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/50 border-gray-200'
              }`}>
                <div className="text-green-400 font-bold text-lg">DevOps</div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Enthusiast</div>
              </div>
              <div className={`p-3 backdrop-blur-sm rounded-lg border ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/50 border-gray-200'
              }`}>
                <div className="text-purple-400 font-bold text-lg">Data Science</div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Explorer</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Section */}
          <AnimatedSection direction="right" delay={400} className="lg:col-span-2 space-y-12">
            {/* Timeline */}
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold mb-8 ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>My Journey</h3>
              {timeline.map((item, index) => (
                <AnimatedSection key={index} direction="left" delay={600 + index * 100}>
                  <div className={`group flex items-start space-x-4 p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50' 
                    : 'bg-white/50 border-gray-200 hover:border-blue-400/50'
                }`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                      : 'bg-gradient-to-br from-blue-500 to-purple-500'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold text-lg ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{item.year}</h4>
                    <p className="text-green-400 font-medium">{item.achievement}</p>
                    <p className={`text-sm mt-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{item.description}</p>
                  </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Passion Areas */}
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold mb-8 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>What Drives Me</h3>
              <div className="space-y-4">
                <AnimatedSection direction="right" delay={1000}>
                  <div className={`group p-6 backdrop-blur-sm rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-green-400/50' 
                    : 'bg-white/50 border-gray-200 hover:border-green-400/50'
                }`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <Server className={`w-6 h-6 ${
                      isDark ? 'text-cyan-400' : 'text-blue-500'
                    }`} />
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>DevOps & Automation</h4>
                  </div>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Building efficient CI/CD pipelines and automating infrastructure with tools like Docker, 
                    Jenkins, and Kubernetes. Passionate about Linux systems and cloud technologies.
                  </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={1100}>
                  <div className={`group p-6 backdrop-blur-sm rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-400/50' 
                    : 'bg-white/50 border-gray-200 hover:border-blue-400/50'
                }`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Data Science & ML</h4>
                  </div>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Exploring machine learning algorithms and data visualization tools to extract meaningful 
                    insights from complex datasets using Python and Jupyter.
                  </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={1200}>
                  <div className={`group p-6 backdrop-blur-sm rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-purple-400/50' 
                    : 'bg-white/50 border-gray-200 hover:border-purple-400/50'
                }`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <Code className="w-6 h-6 text-purple-400" />
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Hands-on Learning</h4>
                  </div>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Believer in practical learning through building projects, experimenting with new technologies, 
                    and contributing to open-source communities.
                  </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;