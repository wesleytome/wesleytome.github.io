import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useThemeClasses = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    
    // Remover todas as classes de tema
    root.classList.remove('light', 'dark');
    
    // Adicionar a classe do tema atual
    root.classList.add(theme);
  }, [theme]);
}; 