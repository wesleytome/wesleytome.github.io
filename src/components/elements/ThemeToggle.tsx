import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="relative w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {/* Background com gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Ícone com animação */}
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="relative">
            {theme === 'light' ? (
              <Moon className="w-6 h-6 text-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
            ) : (
              <Sun className="w-6 h-6 text-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
            )}
          </div>
        </div>
        
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
        
        {/* Anel de foco */}
        <div className="absolute inset-0 rounded-full ring-2 ring-primary/0 group-hover:ring-primary/30 transition-all duration-300" />
      </button>
    </div>
  );
};

export default ThemeToggle; 