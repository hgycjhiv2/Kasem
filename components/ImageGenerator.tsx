
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { SpinnerIcon } from './icons/SpinnerIcon';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('الرجاء إدخال وصف للصورة.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateImage(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError('حدث خطأ أثناء إنشاء الصورة. الرجاء المحاولة مرة أخرى.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="image-generator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            جرب مولد الصور بالذكاء الاصطناعي
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            أطلق العنان لإبداعك! اكتب وصفًا لأي فكرة تصميم أو ديكور، ودع الذكاء الاصطناعي يحولها إلى صورة.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="مثال: غرفة جلوس عصرية بألوان زرقاء وذهبية"
              className="flex-grow w-full px-5 py-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-400 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? <SpinnerIcon /> : 'إنشاء الصورة'}
            </button>
          </form>

          {error && <p className="text-center text-red-500 mb-4">{error}</p>}

          <div className="w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            {isLoading && (
              <div className="text-center text-gray-500">
                <SpinnerIcon className="w-12 h-12 mx-auto mb-2" />
                <p>جاري إنشاء الصورة...</p>
              </div>
            )}
            {generatedImage && (
              <img src={generatedImage} alt={prompt} className="w-full h-full object-contain" />
            )}
            {!isLoading && !generatedImage && (
              <p className="text-gray-500">ستظهر صورتك هنا</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;
