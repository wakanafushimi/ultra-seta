import Spline, { SplineEvent } from '@splinetool/react-spline';

interface MapProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  traversedPages: number;
  setTraversedPages: React.Dispatch<React.SetStateAction<number>>;
  isEarthQuaking: boolean;
}

const MapCyaya: React.FC<MapProps> = ({ setPage, traversedPages, setTraversedPages, isEarthQuaking }) => {

  const handleMouseDown = (event: SplineEvent) => {
    console.log(event.target.name);
    
    setTraversedPages((prev) => prev + 1);

    if (event.target.name === 'maparrow_ultra') {
      if (traversedPages >= 6) {
        setPage('6');
      }else{
        setPage('1');
      }
     
    } else if (event.target.name === 'maparrow_todo') {
      if (traversedPages >= 6) {
        setPage('6');
      }else{
        setPage('4');
      }
      
    }
  };

  return (
    <div>
        {isEarthQuaking?  <Spline
        scene="https://prod.spline.design/FiCkrMIVW3X4NIum/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      /> :  <Spline
        scene="https://prod.spline.design/DoZLFcIowK2RNGf7/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      />}
      {isEarthQuaking ? <p>💥 Earthquake Emergency! 💥</p> : <p>All clear 🚶‍♂️</p>}
    </div>
  );
};

export default MapCyaya;
