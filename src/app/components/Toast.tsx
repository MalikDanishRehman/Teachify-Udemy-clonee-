'use client';

import { useState } from 'react';

interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, title, message, onClose }) => {
  const getStyles = () => {
    switch (type) {
      case 'success': return 'bg-green-800';
      case 'error': return 'bg-red-800';
      case 'info': return 'bg-blue-800';
      case 'warning': return 'bg-yellow-600';
      default: return 'bg-gray-800';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'info': return 'i';
      case 'warning': return '!';
      default: return '•';
    }
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-xl ${getStyles()} max-w-sm w-full mx-4`}>
      <div className="flex items-center">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-sm font-bold mr-3">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="text-white font-medium">{message}</p>
        </div>
        <button onClick={onClose} className="ml-3 text-white opacity-70 hover:opacity-100 transition-opacity">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;
