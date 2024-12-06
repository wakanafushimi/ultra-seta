import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import MainView from './pages/MainView';
import MapPage from './pages/MapPage';
import InformationPage from './pages/InformationPage';
import IntroductionPage from './pages/IntroductionPage';
import MemberPage from './pages/MemberPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainView />} />
          <Route path="map" element={<MapPage />} />
          <Route path="information" element={<InformationPage />} />
          <Route path="introduction" element={<IntroductionPage />} />
          <Route path="member" element={<MemberPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;