import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  User,
  MessageSquare
} from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully! I\'ll get back to you soon.');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91-8000057147',
      link: 'tel:+918000057147',
      color: isDark ? 'from-green-500 to-emerald-500' : 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'yashkanderiya@gmail.com',
      link: 'mailto:yashkanderiya@gmail.com',
      color: isDark ? 'from-blue-500 to-cyan-500' : 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: 'Chat with me',
      link: 'https://wa.me/918000057147',
      color: isDark ? 'from-green-500 to-emerald-500' : 'from-green-500 to-emerald-500'
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
                ? 'from-cyan-400 to-green-400' 
                : 'from-blue-600 to-green-600'
            }`}>
              Let's Connect
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to collaborate on exciting projects or discuss opportunities in DevOps and Data Science
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection direction="left" delay={300} className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Get in Touch
              </h3>
              <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always open to discussing new opportunities, collaborating on projects, 
                or just having a conversation about technology and innovation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <AnimatedSection key={index} direction="left" delay={500 + index * 100}>
                  <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20' 
                      : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.label}
                    </h4>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.value}
                    </p>
                  </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={600} className={`p-8 rounded-xl border ${
            isDark 
              ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' 
              : 'bg-white/50 backdrop-blur-sm border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Name
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-200 ${
                    focusedField === 'name' 
                      ? isDark ? 'text-cyan-400' : 'text-blue-500'
                      : isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                    } focus:outline-none`}
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="group">
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-200 ${
                    focusedField === 'email' 
                      ? isDark ? 'text-cyan-400' : 'text-blue-500'
                      : isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                    } focus:outline-none`}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="group">
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-200 ${
                    focusedField === 'message' 
                      ? isDark ? 'text-cyan-400' : 'text-blue-500'
                      : isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg transition-all duration-200 resize-none ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                    } focus:outline-none`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/50' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-2 focus:ring-blue-400/50 hover:shadow-lg hover:shadow-blue-500/50'
                } focus:outline-none`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;