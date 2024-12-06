import Spline, { SplineEvent } from '@splinetool/react-spline';

interface MapProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  traversedPages: number;
  setTraversedPages: React.Dispatch<React.SetStateAction<number>>;
  isEarthQuaking: boolean;
}

const MapTodo: React.FC<MapProps> = ({ setPage, traversedPages, setTraversedPages, isEarthQuaking }) => {

  const handleMouseDown = (event: SplineEvent) => {
    console.log(event.target.name);
    setTraversedPages((prev) => prev + 1);

    if (event.target.name === 'maparrow_goutoku') {
      if (traversedPages >= 6) {
        setPage('6');
      }else{
        setPage('3');
      }
      
    } else if (event.target.name === 'maparrow_cyaya') {
      if (traversedPages >= 6) {
        setPage('6');
      }else{
        setPage('2');
      }
      
    }
  };

  return (
    <div>
        {isEarthQuaking?  <Spline
        scene="https://prod.spline.design/wS7mlTmo7y7IS0uT/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      /> :  <Spline
        scene="https://prod.spline.design/cFWPwIn6tNuwMe-2/scene.splinecode"
        onSplineMouseDown={handleMouseDown}
      />}
     
      {isEarthQuaking ? <p>💥 Earthquake Emergency! 💥</p> : <p>All clear 🚶‍♂️</p>}
    </div>
  );
};

export default MapTodo;
