import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import MapUltra from '../components/map/MapUltra';
import MapCyaya from '../components/map/MapCyaya';
import MapGouto from '../components/map/MapGouto';
import MapTodo from '../components/map/MapTodo';
import MapHinan from '../components/map/MapHinan';
import MapKara from '../components/map/MapKara';

type LocationState = {
  state: {
    page?: string;
  };
};

const MapPage = () => {
  const location = useLocation() as LocationState;
  const initialPage = parseInt(location.state?.page || '1');

  const [page, setPage] = useState<string>(location.state?.page || '1');
  const [traversedPages, setTraversedPages] = useState<number>(0);
  const [isEarthQuaking, setIsEarthQuaking] = useState(false);

  const quakeTrigger = useMemo(() => 6 - initialPage, [initialPage]);

  useEffect(() => {
    console.log(traversedPages)
    console.log(page)
    if (traversedPages === quakeTrigger) {
      setIsEarthQuaking(true);
      console.log("Earthquake triggered! 🌀");
    }
  }, [traversedPages, quakeTrigger]);

  const sharedProps = {
    setPage,
    traversedPages,
    setTraversedPages,
    isEarthQuaking,
  };

  const renderPage = useMemo(() => {
    switch (page) {
      case '1':
        return <MapUltra {...sharedProps} />;
      case '2':
        return <MapCyaya {...sharedProps} />;
      case '3':
        return <MapGouto {...sharedProps} />;
      case '4':
        return <MapTodo {...sharedProps} />;
      case '5':
        return <MapKara {...sharedProps} />;
      case '6':
        return (<MapHinan setPage={setPage} setIsEarthQuaking={setIsEarthQuaking} setTraversedPages={setTraversedPages} isEarthQuaking={isEarthQuaking}/>);
      default:
        return <MapUltra {...sharedProps} />;
    }
  }, [page, isEarthQuaking, traversedPages]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-emerald-50 p-8">
     
        {renderPage}
      
      <div className="text-center mt-4">
        {isEarthQuaking ? (
          <p className="text-red-500">⚠️ Earthquake in progress! ⚠️</p>
        ) : (
          <p className="text-green-500">Safe journey ahead 🌟</p>
        )}
      </div>
    </div>
  );
};

export default MapPage;
