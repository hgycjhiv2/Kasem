import React, { useState, useEffect } from 'react';

const heroImages = [
  'https://i.postimg.cc/cC6zT2R1/images.jpg',
  'https://i.postimg.cc/g2pCbSdT/images-1.jpg',
  'https://i.postimg.cc/bNpgzKD6/images-2.jpg',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <section 
        className="relative h-screen flex items-center"
    >
      {/* Background Images Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 opacity-0 fade-in">
          خصك صبغة جديدة؟ عندك مشكل في التريسيتي؟
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-green-400 mb-6 opacity-0 fade-in fade-in-delay-1">
          فريق BTM راهو هنا!
        </h3>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-0 fade-in fade-in-delay-2">
          نقدم لكم أفضل خدمات الصباغة والكهرباء للمنازل بجودة عالية واحترافية. راحتكم هي أولويتنا.
        </p>
        <a
          href="https://wa.me/213562808287"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white font-bold text-xl px-10 py-4 rounded-full transition-transform duration-300 hover:bg-green-700 pulse-animation opacity-0 fade-in fade-in-delay-3"
        >
          اطلب خدمتك الآن عبر واتساب
        </a>
      </div>
    </section>
  );
};

export default Hero;
