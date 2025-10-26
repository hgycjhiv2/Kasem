import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'محمد',
    quote: 'جميل جدا، خدمة نقية يعطيكم الصحة.',
    avatar: 'https://picsum.photos/100/100?random=20',
  },
  {
    name: 'هارون',
    quote: 'روعة! ناس محترفين و خدمتهم في القمة.',
    avatar: 'https://picsum.photos/100/100?random=21',
  },
  {
    name: 'رفيق',
    quote: 'خدمة متقونة و في وقتها. أنصح بهم.',
    avatar: 'https://picsum.photos/100/100?random=22',
  },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
    const [ref, isInView] = useScrollAnimation();
    return (
        <div
        ref={ref}
        className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center mb-4">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-green-500" />
          <div>
            <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
      </div>
    )
}

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">واش قالوا علينا الزبائن؟</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          رضا الزبائن هو شهادتنا الأغلى. إليك بعض الآراء التي نعتز بها.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;