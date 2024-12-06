import Spline, { SplineEvent } from '@splinetool/react-spline';

interface MapProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  traversedPages: number;
  setTraversedPages: React.Dispatch<React.SetStateAction<number>>;
  isEarthQuaking: boolean;
}

const MapGouto: React.FC<MapProps> = ({ setPage, traversedPages, setTraversedPages, isEarthQuaking }) => {

  const handleMouseDown = (event: SplineEvent) => {
    console.log(event.target.name);
    setTraversedPages((prev) => prev + 1);

    if (event.target.name === 'maparrow_karasu') {
      if (traversedPages >= 6) {
        setPage('6');
      }
      setPage('5');
    } else if (event.target.name === 'maparrow_todo') {
      if (traversedPages >= 6) {
        setPage('6');
      }
      setPage('4');
    }
  };

  return (
    <div>
        {isEarthQuaking?  <Spline
        scene="https://prod.spline.design/Lz3HYuAXhbweqycA/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      /> :  <Spline
        scene="https://prod.spline.design/6TPI5BLXEsPagwhZ/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      />}
      {isEarthQuaking ? <p>💥 Earthquake Emergency! 💥</p> : <p>All clear 🚶‍♂️</p>}
    </div>
  );
};

export default MapGouto;
