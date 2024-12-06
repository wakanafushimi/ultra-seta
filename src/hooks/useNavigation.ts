import { useState } from 'react';

export function useNavigation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavigation = () => {
    setIsExpanded(prev => !prev);
  };

  return {
    isExpanded,
    toggleNavigation,
  };
}