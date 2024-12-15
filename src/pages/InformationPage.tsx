import { Info } from 'lucide-react';
import { useState } from 'react';

const data = [
  { title: '防災計画の策定', content: (<>
  「世田谷区地域防災計画」を策定し、<br/>避難所の開設や物資調達方法を定め、<br/>避難所や経路の整備を進めています。
  </>)},
  { title: '防災意識の向上', content: (<>防災訓練や教室、<br/>防災フェアを通じて住民の防災意識を高め、<br/>災害時の対応方法を普及しています。 </>)},
  { title: 'ハザードマップの作成', content: (<>災害リスクを示したハザードマップを配布・公開し、<br/>住民がリスクを把握しやすくしています。 </>)},
  { title: '防災インフラの整備', content: (<>公共施設や学校の耐震化を進め、<br/>避難所には防災備蓄を充実させ、<br/>災害時には防災無線やポータルサイトで迅速に情報提供を行っています。 </>)},
  { title: '支援体制の強化', content:(<>災害ボランティアセンターとの連携を深め、<br/>企業や地域と協力し、<br/>災害時の物資調達や支援体制を整えています。 </>) },
];

const InformationPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % data.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-pink-50 pt-16 flex flex-col items-center">
      <div className="flex items-center mb-8">
        <Info className="w-10 h-10 text-purple-300 mr-4" />
        <h1 className="text-6xl font-bold text-gray-900 mt-8">世田谷区防災対策</h1>
      </div>

      <div className="relative w-full h-80 flex items-center justify-center m-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-purple-100 p-2 rounded-full shadow-md hover:bg-purple-200 ml-8"
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
                className={`absolute transition-all duration-500 ease-in-out transform bg-white p-16 rounded-xl shadow-lg text-center w-96 ${position}`}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                <p className="text-gray-600 leading-loose">{item.content}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-purple-100 p-2 rounded-full shadow-md hover:bg-purple-200 mr-8"
        >
          ▶
        </button>
      </div>

      <div className="flex space-x-2 m-auto">
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