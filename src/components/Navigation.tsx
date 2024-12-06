import { Home, Map, Info, BookOpen, Users, Menu } from 'lucide-react';
import { NavigationLink } from './NavigationLink';
import { useNavigation } from '../hooks/useNavigation';

const navigationItems = [
  { to: '/', icon: Home, label: 'Index' },
  { to: '/map', icon: Map, label: 'Map' },
  { to: '/information', icon: Info, label: 'Information' },
  { to: '/introduction', icon: BookOpen, label: 'Introduction' },
  { to: '/member', icon: Users, label: 'Member' },
];

export function Navigation() {
  const { isExpanded, toggleNavigation } = useNavigation();

  return (
    <nav className={`
      fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out
      ${isExpanded ? 'w-64' : 'w-16'}
    `}>
      <div className="flex flex-col h-full">
        <div className="flex items-center p-4 border-b">
          <button
            onClick={toggleNavigation}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation"
          >
            <Menu size={20} />
          </button>
          {isExpanded && (
            <span className="ml-3 font-semibold transition-opacity duration-200">
              Navigation
            </span>
          )}
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {navigationItems.map((item) => (
            <NavigationLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isExpanded={isExpanded}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}