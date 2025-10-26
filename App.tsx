
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white text-gray-800">
      <Header
        isScrolled={isScrolled}
        refs={{ galleryRef, testimonialsRef, contactRef }}
      />
      
      <main>
        <Hero />
        <div ref={galleryRef}><Gallery onImageClick={setSelectedImage} /></div>
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={contactRef}><Contact /></div>
      </main>

      <Footer />
      
      {selectedImage && (
        <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default App;
