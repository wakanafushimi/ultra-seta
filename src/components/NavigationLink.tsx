import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavigationLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isExpanded: boolean;
}

export function NavigationLink({ to, icon: Icon, label, isExpanded }: NavigationLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        flex items-center px-4 py-3 rounded-lg transition-all duration-200
        ${isActive 
          ? 'bg-blue-100 text-blue-700' 
          : 'text-gray-700 hover:bg-gray-100'
        }
        ${isExpanded ? 'w-full' : 'w-12 justify-center'}
      `}
    >
      <Icon size={20} />
      {isExpanded && (
        <span className="ml-3 transition-opacity duration-200">{label}</span>
      )}
    </Link>
  );
}