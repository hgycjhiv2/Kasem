
import React, { RefObject } from 'react';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
  refs: {
    galleryRef: RefObject<HTMLDivElement>;
    testimonialsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ isScrolled, refs }) => {
  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          <button onClick={() => scrollToRef(refs.galleryRef)} className="text-gray-700 hover:text-green-700 transition-colors duration-300">أعمالنا</button>
          <button onClick={() => scrollToRef(refs.testimonialsRef)} className="text-gray-700 hover:text-green-700 transition-colors duration-300">آراء العملاء</button>
          <button onClick={() => scrollToRef(refs.contactRef)} className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">تواصل معنا</button>
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;
