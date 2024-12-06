import { useState } from 'react';
import { BookOpen } from 'lucide-react';

const tabs = [
  { id: 'karasuyama', title: '烏山寺町', content: 'Learn the basics and set up your account.' },
  { id: 'sangenjaya', title: '三軒茶屋', content: 'Explore our main features and capabilities.' },
  { id: 'gotokuji', title: '豪徳寺', content: 'Tips and tricks for optimal usage.' },
  { id: 'todoroki', title: '等々力渓谷', content: 'Enjoy serene natural beauty in Setagaya.' },
  { id: 'ultraman', title: 'ウルトラマン商店街', content: 'Experience the iconic Ultraman shopping street.' },
];

const IntroductionPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <BookOpen className="w-10 h-10 text-yellow-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">About 世田谷</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab.id ? 'border-b-2 border-yellow-600 text-yellow-600' : 'text-gray-600'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            {tabs.map((tab) =>
              activeTab === tab.id ? (
                <div key={tab.id} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{tab.title}</h2>
                  <p className="text-gray-600">{tab.content}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
