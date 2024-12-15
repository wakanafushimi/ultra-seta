import { HandMetal } from 'lucide-react';
import { useState } from 'react';
import catImg from '../assets/cat.jpg';

const data = [
  {
    title: '中田',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '伏見',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '王',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '上村',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '阿部',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '池田',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '山崎 ',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '張',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
  {
    title: '鄭',
    content: '2',
    imageUrl: catImg// Replace with actual image URL
  },
];


const MemberPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % data.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 to-blue-50 pt-16 flex flex-col items-center">
      <div className="flex items-center mb-8">
        <HandMetal className="w-10 h-10 text-purple-100 mr-4" />
        <h1 className="text-8xl font-bold text-gray-900 mt-8">Team Member</h1>
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
            // 计算每个卡片的位置
            const position =
              index === currentIndex
                ? 'z-20 scale-100 opacity-100' // 当前卡片（最突出）
                : index === (currentIndex - 1 + data.length) % data.length
                ? 'z-10 -translate-x-32 scale-90 opacity-75' // 左侧第二近的卡片
                : index === (currentIndex - 2 + data.length) % data.length
                ? 'z-5 -translate-x-64 scale-75 opacity-50' // 最左侧的卡片
                : index === (currentIndex + 1) % data.length
                ? 'z-10 translate-x-32 scale-90 opacity-75' // 右侧第二近的卡片
                : index === (currentIndex + 2) % data.length
                ? 'z-5 translate-x-64 scale-75 opacity-50' // 最右侧的卡片
                : 'hidden'; // 隐藏其他卡片

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out transform bg-white p-4 rounded-xl shadow-lg text-center w-64 ${position}`}
              >
                <img
                  src={item.imageUrl} // 图片 URL
                  alt={item.title}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
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

export default MemberPage;
