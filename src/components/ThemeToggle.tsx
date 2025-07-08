import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={() => setIsDark(!isDark)}
        className={`group relative p-4 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-12 ${
          isDark 
            ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700 text-yellow-400 hover:bg-gray-700/80 hover:shadow-lg hover:shadow-yellow-400/50' 
            : 'bg-white/80 backdrop-blur-md border border-gray-200 text-gray-600 hover:bg-gray-50/80 hover:shadow-lg hover:shadow-blue-500/50'
        }`}
        aria-label="Toggle theme"
      >
        <div className="relative">
          {/* Theme Icons with Rotation Animation */}
          <div className={`transition-all duration-500 ${isDark ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0 absolute inset-0'}`}>
            <Sun className="w-6 h-6" />
          </div>
          <div className={`transition-all duration-500 ${!isDark ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0 absolute inset-0'}`}>
            <Moon className="w-6 h-6" />
          </div>
          
          {/* Animated Ring */}
          <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
            isDark 
              ? 'border-yellow-400/0 group-hover:border-yellow-400/50' 
              : 'border-blue-500/0 group-hover:border-blue-500/50'
          } animate-spin-slow`} />
        </div>
        
        {/* Tooltip */}
        <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap ${
          isDark 
            ? 'bg-gray-700 text-gray-200 border border-gray-600' 
            : 'bg-white text-gray-700 border border-gray-200 shadow-lg'
        }`}>
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;