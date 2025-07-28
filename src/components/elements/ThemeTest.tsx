import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeTest: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed top-6 left-6 z-50 p-4 bg-card border border-border rounded-lg text-foreground">
      <div className="text-sm">
        <div>Tema atual: <strong>{theme}</strong></div>
        <div className="mt-2">
          <div className="w-4 h-4 bg-background border border-border rounded"></div>
          <div className="text-xs mt-1">Background</div>
        </div>
        <div className="mt-2">
          <div className="w-4 h-4 bg-foreground border border-border rounded"></div>
          <div className="text-xs mt-1">Foreground</div>
        </div>
        <div className="mt-2">
          <div className="w-4 h-4 bg-primary border border-border rounded"></div>
          <div className="text-xs mt-1">Primary</div>
        </div>
        <div className="mt-2">
          <div className="w-4 h-4 bg-card border border-border rounded"></div>
          <div className="text-xs mt-1">Card</div>
        </div>
        <div className="mt-2">
          <div className="w-4 h-4 bg-secondary border border-border rounded"></div>
          <div className="text-xs mt-1">Secondary</div>
        </div>
        <div className="mt-2">
          <div className="w-4 h-4 bg-accent border border-border rounded"></div>
          <div className="text-xs mt-1">Accent</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeTest; 