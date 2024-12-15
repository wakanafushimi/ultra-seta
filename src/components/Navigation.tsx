import { Home, Map, Info, BookOpen, Users, Menu } from 'lucide-react';
import { NavigationLink } from './NavigationLink';
import { useNavigation } from '../hooks/useNavigation';

// 导航菜单数据
const navigationItems = [
  { to: '/', icon: Home, label: 'Index' },
  { to: '/information', icon: Info, label: 'Information' },
  { to: '/introduction', icon: BookOpen, label: 'Introduction' },
  { to: '/member', icon: Users, label: 'Member' },
];

export function Navigation() {
  const { isExpanded, toggleNavigation } = useNavigation();

  return (
    <nav className={`
      fixed left-0 top-0 w-full h-16 bg-transparent z-50 
      transition-all duration-300 ease-in-out
    `}>
      <div className="flex items-center justify-around h-full px-4">
        {/* 菜单按钮 */}
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
    </nav>
  );
}
