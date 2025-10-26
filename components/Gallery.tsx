
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface GalleryProps {
  onImageClick: (url: string) => void;
}

const galleryImages = [
  { id: 1, src: 'https://i.postimg.cc/L47Lnwb8/Messenger-creation-FC3544C7-F2FB-4C14-8DA0-CE081029783F.jpg', alt: 'صباغة غرفة جلوس عصرية' },
  { id: 2, src: 'https://i.postimg.cc/T2j44hJV/images-6.jpg', alt: 'تصليح عداد كهرباء' },
  { id: 3, src: 'https://i.postimg.cc/HLxbJmd8/Messenger-creation-C40D279E-ABE9-4093-B294-FC15655801BC.jpg', alt: 'صباغة و ديكور جدران' },
  { id: 4, src: 'https://i.postimg.cc/289kkNcw/Messenger-creation-A03D275C-A43F-448F-80B9-53E64E923593.jpg', alt: 'صباغة أسقف و ديكور' },
  { id: 5, src: 'https://i.postimg.cc/PJ5n7DFp/Messenger-creation-7072657603595023633.jpg', alt: 'صباغة داخلية حديثة' },
  { id: 6, src: 'https://i.postimg.cc/wvVdF22S/Messenger-creation-7072657568432479916.jpg', alt: 'ديكورات جدارية راقية' },
  { id: 7, src: 'https://i.postimg.cc/GpvRTdyx/Messenger-creation-7072657541808767276.jpg', alt: 'تشطيبات نهائية مميزة' },
  { id: 8, src: 'https://i.postimg.cc/Dy2MkFCf/images-5.jpg', alt: 'تركيب ثريات' },
  { id: 9, src: 'https://i.postimg.cc/vHjDW8c3/images-3.jpg', alt: 'صباغة خارجية للمنزل' },
  { id: 10, src: 'https://i.postimg.cc/nV3XhGx6/images-4.jpg', alt: 'تركيب وتمديد أسلاك كهربائية' },
];

const GalleryImage: React.FC<{ image: { src: string; alt: string }; onImageClick: (url: string) => void }> = ({ image, onImageClick }) => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transition-all duration-700 ${
        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      onClick={() => onImageClick(image.src)}
    >
      <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white font-semibold">{image.alt}</p>
      </div>
    </div>
  );
};

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">من أعمالنا</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          نفتخر بتقديم أعمال ذات جودة عالية تعكس احترافيتنا. شاهد بعض من مشاريعنا السابقة.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <GalleryImage key={image.id} image={image} onImageClick={onImageClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
