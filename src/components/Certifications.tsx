import React, { useState } from 'react';
import { Award, Plus, Calendar, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface CertificationsProps {
  isDark: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [certifications, setCertifications] = useState<any[]>([]);
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    date: '',
    description: ''
  });

  const handleAddCertification = () => {
    if (newCert.title && newCert.issuer) {
      setCertifications([...certifications, { ...newCert, id: Date.now() }]);
      setNewCert({ title: '', issuer: '', date: '', description: '' });
      setShowAddForm(false);
    }
  };

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
                ? 'from-yellow-400 to-orange-400' 
                : 'from-yellow-600 to-orange-600'
            }`}>
              Certifications
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional development and continuous learning achievements
          </p>
        </AnimatedSection>

        {/* Add Certification Button */}
        <AnimatedSection direction="up" delay={300} className="text-center mb-12">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
            }`}
          >
            <Plus className="w-5 h-5" />
            Add Certification
          </button>
        </AnimatedSection>

        {/* Add Certification Form */}
        {showAddForm && (
          <AnimatedSection direction="down" delay={100} className={`max-w-2xl mx-auto mb-12 p-6 rounded-xl border ${
            isDark 
              ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' 
              : 'bg-white/50 backdrop-blur-sm border-gray-200'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Add New Certification
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Certification Title"
                value={newCert.title}
                onChange={(e) => setNewCert({...newCert, title: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-all duration-200 ${
                  isDark 
                    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400'
                } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                value={newCert.issuer}
                onChange={(e) => setNewCert({...newCert, issuer: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-all duration-200 ${
                  isDark 
                    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400'
                } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
              />
              <input
                type="date"
                value={newCert.date}
                onChange={(e) => setNewCert({...newCert, date: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-all duration-200 ${
                  isDark 
                    ? 'bg-gray-700/50 border-gray-600 text-white focus:border-cyan-400' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-400'
                } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
              />
              <textarea
                placeholder="Description (optional)"
                value={newCert.description}
                onChange={(e) => setNewCert({...newCert, description: e.target.value})}
                rows={3}
                className={`w-full p-3 rounded-lg border transition-all duration-200 resize-none ${
                  isDark 
                    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400'
                } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
              />
              <div className="flex gap-3">
                <button
                  onClick={handleAddCertification}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  Add
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-600 text-white hover:bg-gray-700' 
                      : 'bg-gray-400 text-white hover:bg-gray-500'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Certifications Grid */}
        {certifications.length > 0 ? (
          <AnimatedSection direction="up" delay={500} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className={`group p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20' 
                  : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${
                    isDark ? 'from-yellow-500 to-orange-500' : 'from-yellow-500 to-orange-500'
                  }`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {cert.date && (
                    <div className={`flex items-center gap-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </h3>
                <p className={`font-medium mb-3 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  {cert.issuer}
                </p>
                {cert.description && (
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </AnimatedSection>
        ) : (
          <AnimatedSection direction="up" delay={500} className="text-center">
            <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border ${
              isDark 
                ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' 
                : 'bg-white/50 backdrop-blur-sm border-gray-200'
            }`}>
              <Award className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-blue-500'}`} />
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                No certifications added yet. Click "Add Certification" to get started!
              </span>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Certifications;