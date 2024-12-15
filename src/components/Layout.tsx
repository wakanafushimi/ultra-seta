import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen flex">
      <Navigation />
      <main className="flex-1 transition-all duration-300">
       
          <Outlet />
       
      </main>
    </div>
  );
}