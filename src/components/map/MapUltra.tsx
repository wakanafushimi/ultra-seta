import Spline, { SplineEvent } from '@splinetool/react-spline';

interface MapProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  traversedPages: number;
  setTraversedPages: React.Dispatch<React.SetStateAction<number>>;
  isEarthQuaking: boolean;
}

const MapUltra: React.FC<MapProps> = ({ setPage, traversedPages, setTraversedPages, isEarthQuaking }) => {

  const handleMouseDown = (event: SplineEvent) => {
    console.log(event.target.name);
    setTraversedPages((prev) => prev + 1);

    if (event.target.name === 'maparrow_cyaya') {
      if (traversedPages >= 6) {
        setPage('6');
      }
      setPage('2');
    } else if (event.target.name === 'maparrow_karasu') {
      if (traversedPages >= 6) {
        setPage('6');
      }
      setPage('5');
    }
  };

  return (
    <div>
        {isEarthQuaking?  <Spline
        scene="https://prod.spline.design/2jgr7fhKbfGU-8-r/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      /> :  <Spline
        scene="https://prod.spline.design/KN2xBEacJDgB9Juy/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      />}
     
      {isEarthQuaking ? <p>💥 Earthquake Emergency! 💥</p> : <p>All clear 🚶‍♂️</p>}
    </div>
  );
};

export default MapUltra;
