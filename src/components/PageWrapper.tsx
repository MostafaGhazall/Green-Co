import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTransitionStore } from '../store/useStore';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { transitioning, setTransitioning } = useTransitionStore();

  useEffect(() => {
    setTransitioning(true);
    const timeout = setTimeout(() => setTransitioning(false), 700); // Animation duration in ms
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className={transitioning ? 'animate-slideIn' : ''}>
      {children}
    </div>
  );
};

export default PageWrapper;
