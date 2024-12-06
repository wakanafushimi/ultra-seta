import { useEffect } from 'react';
import Spline, { SplineEvent } from '@splinetool/react-spline';

interface MapProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setTraversedPages: React.Dispatch<React.SetStateAction<number>>;
  isEarthQuaking: boolean;
  setIsEarthQuaking: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapHinan: React.FC<MapProps> = ({
  setPage,
  setTraversedPages,
  isEarthQuaking,
  setIsEarthQuaking,
}) => {
  useEffect(() => {
    // 在进入 MapHinan 页面时重置状态
    setTraversedPages(0); // 将 traversedPages 设置为 0
    setIsEarthQuaking(false); // 设置为地震状态
  }, [setTraversedPages, setIsEarthQuaking]);

  const handleMouseDown = (event: SplineEvent) => {
    console.log(event.target.name);

    // 处理返回上一张地图的逻辑
    if (event.target.name === 'maparrow_back') {
      // 这里表示上一张地图
      setPage('1'); // 返回至地图 1
    };
  }
  
  return (
    <div>
      <Spline
        scene="https://prod.spline.design/atjFs8Ba1YvCmsi1/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      />
      {isEarthQuaking ? <p>💥 Earthquake Emergency! 💥</p> : <p>All clear 🚶‍♂️</p>}
    </div>
  );
};

export default MapHinan;
