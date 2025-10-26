
import React from 'react';

const Logo: React.FC = () => (
  <div 
    className="flex items-center cursor-pointer" 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    aria-label="BTM Home"
    role="button"
  >
    <img 
      src='https://i.postimg.cc/v85pRJN0/Messenger-creation-E6745BCA-B896-453A-8772-074B03DB78AF.jpg' 
      alt='BTM Logo' 
      className="h-12 w-auto"
    />
  </div>
);

export default Logo;
