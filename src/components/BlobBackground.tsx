import React from 'react';

interface BlobBackgroundProps {
  isDark: boolean;
}

const BlobBackground: React.FC<BlobBackgroundProps> = ({ isDark }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Blob 1 */}
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob ${
          isDark 
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
            : 'bg-gradient-to-r from-blue-400 to-purple-500'
        }`}
        style={{
          top: '10%',
          left: '10%',
          animationDelay: '0s',
        }}
      />
      
      {/* Animated Blob 2 */}
      <div
        className={`absolute w-80 h-80 rounded-full blur-3xl opacity-20 animate-blob ${
          isDark 
            ? 'bg-gradient-to-r from-green-400 to-cyan-500' 
            : 'bg-gradient-to-r from-green-400 to-blue-500'
        }`}
        style={{
          top: '60%',
          right: '10%',
          animationDelay: '2s',
        }}
      />
      
      {/* Animated Blob 3 */}
      <div
        className={`absolute w-72 h-72 rounded-full blur-3xl opacity-20 animate-blob ${
          isDark 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
            : 'bg-gradient-to-r from-purple-400 to-pink-400'
        }`}
        style={{
          bottom: '10%',
          left: '50%',
          animationDelay: '4s',
        }}
      />
      
      {/* Animated Blob 4 */}
      <div
        className={`absolute w-64 h-64 rounded-full blur-3xl opacity-15 animate-blob ${
          isDark 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
            : 'bg-gradient-to-r from-yellow-400 to-red-400'
        }`}
        style={{
          top: '30%',
          right: '30%',
          animationDelay: '6s',
        }}
      />
      
      {/* Animated Blob 5 */}
      <div
        className={`absolute w-56 h-56 rounded-full blur-3xl opacity-15 animate-blob ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
            : 'bg-gradient-to-r from-indigo-400 to-purple-500'
        }`}
        style={{
          bottom: '40%',
          right: '60%',
          animationDelay: '8s',
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div className={`absolute inset-0 opacity-5 ${
        isDark ? 'bg-grid-white' : 'bg-grid-black'
      }`} style={{
        backgroundImage: `radial-gradient(circle, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
};

export default BlobBackground;