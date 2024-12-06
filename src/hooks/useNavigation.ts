import { useState } from 'react';

export function useNavigation() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleNavigation = () => {
    setIsExpanded(prev => !prev);
  };

  return {
    isExpanded,
    toggleNavigation,
  };
}