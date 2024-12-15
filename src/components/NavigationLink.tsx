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
          ? 'border border-white-400 text-white-800' // 活动状态：浅灰色边框，文字深灰色
          : 'text-gray-500 hover:bg-gray-700 border border-transparent'
        }
        'w-full'
      `}
    >
      <Icon className="text-gray-300"size={20} />
        <span className="ml-3 transition-opacity duration-200 text-gray-300">{label}</span>
    </Link>
  );
}