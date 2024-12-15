import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import ultra from '../assets/soshigayaultra.jpg';
import todo from '../assets/todo.jpg';
import karasu from '../assets/karasuyama.jpg';
import goutoku from '../assets/gotoku.jpg';
import cyaya from '../assets/cyaya.jpeg';

const tabs = [
  { id: 'gotokuji', title: '豪徳寺', content: (<>
  豪徳寺は、東京都世田谷区に位置する曹洞宗の寺院で、<br/>
  招き猫の発祥地として広く知られています。<br/><br/>
  豪徳寺は、井伊家（江戸時代に徳川幕府に仕えた有名な武士の一族）と深い関わりがあり、<br/>
  特に井伊直孝（いいなおたか）との伝説が語り継がれています。<br/><br/>
  豪徳寺の敷地内には、<br/>
  数え切れないほどの招き猫が奉納されており、<br/>
  訪れる人々が祈りを込めて奉納したものです。<br/><br/>
  特に、白い猫で左手を挙げているのが特徴で、<br/>
  商売繁盛や家内安全などのご利益があるとされています。<br/><br/>
  また、境内には美しい庭園や、井伊家の墓所もあります。<br/>
  観光名所としても人気があり、<br/>
  四季折々の風景が楽しめるほか、<br/>
  招き猫に関心のある観光客にとっては必見のスポットとなっています。<br/>
  </>), image: goutoku },
  { id: 'sangenjaya', title: '三軒茶屋', content: (<>
  三軒茶屋は、東京都世田谷区にある人気のエリアです。<br/><br/>
  カフェや居酒屋、小さな個人経営の店が多く、<br/>
  特に「三角地帯」と呼ばれるエリアでは、<br/>
  昭和の雰囲気を感じられる飲食店が並んでいます。<br/><br/>
  また、キャロットタワーの展望フロアからは、<br/>
  無料で美しい東京の景色を楽しむことができます。<br/><br/>
  地元の雰囲気と都会の利便性が魅力の場所です。
  </>), image: cyaya },
  { id: 'karasuyama', title: '烏山寺町', content: (<>
  烏山寺町は、<br/>
  北烏山2丁目から6丁目にかけて広がり、<br/>
  寺町通りを中心に26もの寺院が並ぶエリアです。<br/><br/>
  大正12年の関東大震災を受け、<br/>
  当時の東京都内にあった多くの寺院がこの地に移転してきました。<br/><br/>
  地域には、<br/>
  お寺の屋根や塀が点在し、<br/>
  歴史と風情を感じさせる魅力的な景観が広がっています。
  </>), image: karasu },
  { id: 'todoroki', title: '等々力渓谷', content: (<>
  等々力渓谷は、<br/>
  東京都世田谷区に位置する美しい自然の渓谷で、<br/>
  都心からアクセスしやすい隠れたオアシスです。<br/><br/>
  東京23区内では珍しい渓谷で、<br/>
  緑豊かな景観と静かな環境が特徴です。<br/><br/>
  等々力渓谷には「等々力不動尊」と呼ばれる不動明王が祀られたお堂があり、<br/>
  ここは古くから地域住民に信仰されてきました。<br/><br/>
  不動尊の境内には滝もあり、<br/>
  パワースポットとしても知られています。<br/><br/>
  また、渓谷周辺には古墳などもあり、<br/>
  地域の歴史や文化を感じることができます。
  </>), image: todo },
  { id: 'ultraman', title: 'ウルトラマン商店街', content: (<>
  ウルトラマン商店街は、<br/>
  ウルトラマンシリーズをテーマにしたユニークな商店街で、<br/>
  ウルトラマンファンはもちろん、<br/>
  家族連れや観光客にも人気のスポットです。<br/><br/>
  商店街には、<br/>
  ウルトラマンや怪獣のオブジェが点在しており、<br/>
  訪れる人々はまるでウルトラマンの世界に入り込んだかのような気分を味わえます。<br/><br/>
  各店舗ではウルトラマン関連のグッズやお土産が販売されているほか、<br/>
  ウルトラマンのキャラクターにちなんだ特別なメニューを提供するカフェやレストランもあります。<br/><br/>
  ウルトラマン商店街を歩くだけで、<br/>
  どこか懐かしくも新しいヒーローの世界に触れられるでしょう。

  </>), image: ultra },
];

const IntroductionPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  
  const currentBackgroundImage = tabs.find(tab => tab.id === activeTab)?.image;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-700 to-orange-50 pt-16 relative">

      <div className="max-w-4xl mx-auto relative z-10">
       
        <div className="flex items-center">
          <BookOpen className="w-10 h-10 text-orange-300 mr-4" />
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">About<br/> ＿＿世田谷</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab.id ? 'border-b-2 border-yellow-100 text-orange-300' : 'text-gray-600'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-4">
          
          <div className="flex-shrink-0 w-1/3 h-auto">
            <img
              src={tabs.find(tab => tab.id === activeTab)?.image}
              alt="content"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="prose max-w-none flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">{tabs.find(tab => tab.id === activeTab)?.title}</h2>
            <p className="text-gray-600">{tabs.find(tab => tab.id === activeTab)?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
