import React, { useState, useEffect, useRef } from 'react';
import { Upload, Camera, X, User, Edit3 } from 'lucide-react';

interface ProfilePictureProps {
  isDark: boolean;
  size?: 'small' | 'medium' | 'large';
  showUpload?: boolean;
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ 
  isDark, 
  size = 'medium', 
  showUpload = true,
  className = '' 
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Size configurations
  const sizeConfig = {
    small: { container: 'w-16 h-16', icon: 'w-8 h-8', button: 'w-6 h-6', text: 'text-xs' },
    medium: { container: 'w-32 h-32', icon: 'w-16 h-16', button: 'w-8 h-8', text: 'text-sm' },
    large: { container: 'w-48 h-48', icon: 'w-24 h-24', button: 'w-10 h-10', text: 'text-base' }
  };

  const config = sizeConfig[size];

  // Load saved profile image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
        localStorage.setItem('profileImage', result);
        setShowUploadModal(false);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const removeImage = () => {
    setProfileImage(null);
    localStorage.removeItem('profileImage');
    setShowUploadModal(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Profile Picture Container */}
      <div className={`relative ${config.container} mx-auto`}>
        <div className={`${config.container} rounded-full overflow-hidden border-4 transition-all duration-300 transform group-hover:scale-105 ${
          isDark 
            ? 'border-cyan-400/30 bg-gray-800/50 backdrop-blur-sm' 
            : 'border-blue-400/30 bg-white/50 backdrop-blur-sm'
        }`}>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Yash Kumawat"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${
              isDark 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'bg-gradient-to-br from-gray-100 to-gray-200'
            }`}>
              <User className={`${config.icon} ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
          )}
          
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Upload Button */}
        {showUpload && (
          <button
            onClick={() => setShowUploadModal(true)}
            className={`absolute bottom-0 right-0 ${config.button} rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDark 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/50' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/50'
            }`}
          >
            <Edit3 className="w-4 h-4" />
          </button>
        )}

        {/* Glassmorphic Ring Effect */}
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-br from-cyan-400/10 to-blue-500/10' 
            : 'bg-gradient-to-br from-blue-400/10 to-purple-500/10'
        } backdrop-blur-sm opacity-0 group-hover:opacity-100`}></div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`relative max-w-md w-full p-6 rounded-2xl border ${
            isDark 
              ? 'bg-gray-800/90 backdrop-blur-md border-gray-700' 
              : 'bg-white/90 backdrop-blur-md border-gray-200'
          }`}>
            {/* Close Button */}
            <button
              onClick={() => setShowUploadModal(false)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                isDark 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className={`text-xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Update Profile Picture
            </h3>

            {/* Drag & Drop Area */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                isDragging
                  ? isDark
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-blue-400 bg-blue-400/10'
                  : isDark
                    ? 'border-gray-600 hover:border-cyan-400/50'
                    : 'border-gray-300 hover:border-blue-400/50'
              }`}
              onClick={triggerFileInput}
            >
              <div className="space-y-4">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}>
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className={`font-medium ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Drop your image here
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    or click to browse
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={triggerFileInput}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}
              >
                <Camera className="w-4 h-4" />
                Choose File
              </button>
              
              {profileImage && (
                <button
                  onClick={removeImage}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-600 hover:bg-red-500/30'
                  }`}
                >
                  Remove
                </button>
              )}
            </div>

            {/* File Format Info */}
            <p className={`text-xs mt-4 text-center ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Supports: JPG, PNG, GIF (Max 5MB)
            </p>
          </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePicture;