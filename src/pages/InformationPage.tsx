import { Info } from 'lucide-react';
import { useState } from 'react';

const data = [
  { title: '防災計画の策定', content: '「世田谷区地域防災計画」を策定し、避難所の開設や物資調達方法を定め、避難所や経路の整備を進めています。' },
  { title: '防災意識の向上', content: '防災訓練や教室、防災フェアを通じて住民の防災意識を高め、災害時の対応方法を普及しています。' },
  { title: 'ハザードマップの作成', content: '災害リスクを示したハザードマップを配布・公開し、住民がリスクを把握しやすくしています。' },
  { title: '防災インフラの整備', content: '公共施設や学校の耐震化を進め、避難所には防災備蓄を充実させ、災害時には防災無線やポータルサイトで迅速に情報提供を行っています。' },
  { title: '支援体制の強化', content: '災害ボランティアセンターとの連携を深め、企業や地域と協力し、災害時の物資調達や支援体制を整えています。' },
];

const InformationPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % data.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8 flex flex-col items-center">
      <div className="flex items-center mb-8">
        <Info className="w-10 h-10 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-gray-900">世田谷区防災対策</h1>
      </div>

      <div className="relative w-full max-w-4xl h-80 flex items-center justify-center overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-purple-100 p-2 rounded-full shadow-md hover:bg-purple-200"
        >
          ◀
        </button>

        <div className="flex items-center justify-center space-x-4 relative">
          {data.map((item, index) => {
            const position = index === currentIndex
              ? 'z-20 scale-100 opacity-100'
              : index === (currentIndex - 1 + data.length) % data.length
              ? 'z-10 -translate-x-20 scale-90 opacity-50'
              : index === (currentIndex + 1) % data.length
              ? 'z-10 translate-x-20 scale-90 opacity-50'
              : 'hidden';

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out transform bg-white p-6 rounded-xl shadow-lg text-center w-64 ${position}`}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-purple-100 p-2 rounded-full shadow-md hover:bg-purple-200"
        >
          ▶
        </button>
      </div>

      <div className="flex space-x-2 mt-6">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-purple-600' : 'bg-purple-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InformationPage;
