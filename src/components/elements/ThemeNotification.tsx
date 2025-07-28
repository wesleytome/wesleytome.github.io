import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeNotification: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [theme]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-6 z-50">
      <div className="flex items-center gap-3 px-4 py-3 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg animate-fade-in-up">
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400" />
        )}
        <span className="text-sm font-medium text-foreground">
          Switched to {theme} mode
        </span>
      </div>
    </div>
  );
};

export default ThemeNotification; 