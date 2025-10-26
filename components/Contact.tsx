
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FacebookIcon, InstagramIcon, WhatsAppIcon, TikTokIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
    const [socialRef, isSocialInView] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          نحن متواجدون دائمًا لمساعدتكم. تواصلوا معنا مباشرة عبر صفحاتنا على مواقع التواصل الاجتماعي.
        </p>

        <div
            ref={socialRef}
            className={`transition-all duration-700 delay-200 ${isSocialInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
            <div className="flex justify-center items-center gap-4 md:gap-6">
                <a href="https://www.facebook.com/share/17YeXujsnB/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                    <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/belkacem_ahnani?igsh=azIxN25uZGVmaXRl" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                    <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@belkacemhnano?_t=ZS-90lgnyWoYYX&_r=1" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                    <TikTokIcon />
                </a>
                <a href="https://wa.me/213562808287" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                    <WhatsAppIcon />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
