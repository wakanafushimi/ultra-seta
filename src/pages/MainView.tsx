import Spline, {SplineEvent} from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

export default function MainView() {
  const navigate = useNavigate();

  const handleMouseDown = (event: SplineEvent) => {
    if (event.target.name) {
      // Use the event target's name to determine the navigation
      switch (event.target.name) {
        case 'g_tamakawa':
          navigate('/map', { state: { page: '4' } });
          break;
        case 'g_setagaya':
          navigate('/map', { state: { page: '2' } });
          break;
        case 'g_seijyo':
          navigate('/map', { state: { page: '3' } });
          break;
        case 'g_kita':
          navigate('/map', { state: { page: '1' } });
          break;
        case 'g_karas':
          navigate('/map', { state: { page: '5' } });
          break;
        default:
          console.log('No action defined for:', event.target.name);
      }
    } else {
      console.error('Clicked object does not have a name.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 to-pink-100 pt-16">
      <Spline
        scene="https://prod.spline.design/lksKQBt7OJj9S0iD/scene.splinecode"
        onSplineMouseDown={handleMouseDown} // Handle click events here
      />
    </div>
  );
}
