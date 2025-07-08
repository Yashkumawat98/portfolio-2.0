import React from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  Heart, 
  Linkedin, 
  Github, 
  MessageCircle, 
  Twitter, 
  Instagram, 
  Mail, 
  Facebook, 
  Youtube
} from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/yash-kumawat-547821339/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Yashkumawat98/Testing-github',
      color: isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://wa.me/918000057147',
      color: 'hover:text-green-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Gmail',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:yashkanderiya@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className={`border-t relative overflow-hidden ${
      isDark 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Social Links */}
        <AnimatedSection direction="up" delay={100} className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <AnimatedSection key={index} direction="up" delay={200 + index * 100}>
                <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-full border transition-all duration-300 transform hover:scale-110 ${
                  isDark 
                    ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20' 
                    : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20'
                } ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Footer Text */}
        <AnimatedSection direction="up" delay={800} className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Made with
            </span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              by
            </span>
            <span className={`font-semibold text-sm ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              Yash Kumawat
            </span>
          </div>
          
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2024 Yash Kumawat. All rights reserved.
          </p>
        </AnimatedSection>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          isDark 
            ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
            : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          isDark 
            ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' 
            : 'bg-gradient-to-br from-green-500/10 to-teal-500/10'
        }`}></div>
      </div>
    </footer>
  );
};

export default Footer;