
import React, { useEffect } from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes zoomIn {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-in-out;
        }
      `}</style>
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        &times;
      </button>
      <div
        className="relative max-w-4xl max-h-[90vh] animate-zoomIn"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      >
        <img src={imageUrl} alt="Enlarged view" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Lightbox;
