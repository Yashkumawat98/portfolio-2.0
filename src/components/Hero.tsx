import React, { useState, useEffect } from 'react';
import { Download, MessageCircle, ChevronDown } from 'lucide-react';
import ProfilePicture from './ProfilePicture';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [nameVisible, setNameVisible] = useState(false);
  const skills = ['JavaScript', 'Python', 'Docker', 'Jenkins', 'Kubernetes', 'AWS', 'Flask', 'Linux'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setNameVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`min-h-screen relative overflow-hidden flex items-center justify-center ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,128,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          </>
        )}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              isDark ? 'bg-cyan-400' : 'bg-blue-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <AnimatedSection direction="up" delay={200}>
          <ProfilePicture 
            isDark={isDark} 
            size="large" 
            showUpload={true}
            className="mb-6"
          />
        </AnimatedSection>

        {/* Animated Name with Blink Effect */}
        <AnimatedSection direction="left" delay={400}>
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 ${
            nameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className={`bg-gradient-to-r bg-clip-text text-transparent animate-blink ${
              isDark 
                ? 'from-cyan-400 via-blue-500 to-green-400' 
                : 'from-blue-600 via-purple-600 to-green-600'
            }`}>
              Yash Kumawat
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-6 animate-slide-up ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            B.Tech CSE Student | DevOps & Data Science Enthusiast
          </p>
        </AnimatedSection>

        {/* Typing Animation */}
        <AnimatedSection direction="right" delay={600}>
          <div className={`text-2xl md:text-3xl font-mono h-12 flex items-center justify-center ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            <span className="mr-2">~/</span>
            <span className="typing-text">{skills[currentSkill]}</span>
            <span className="animate-pulse">|</span>
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection direction="up" delay={800}>
          <button className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            isDark 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:shadow-cyan-500/50' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:shadow-blue-500/50'
          }`}>
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </span>
          </button>
          <button 
            onClick={scrollToContact}
            className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isDark 
                ? 'bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black hover:shadow-green-400/50' 
                : 'bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white hover:shadow-green-500/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Let's Connect
            </span>
          </button>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSection direction="up" delay={1000} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-blue-500'}`} />
      </AnimatedSection>
    </section>
  );
};

export default Hero;