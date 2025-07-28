import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeInitializer: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Forçar aplicação do tema inicial
    const root = document.documentElement;
    
    // Remover classes anteriores
    root.classList.remove('light', 'dark');
    
    // Aplicar tema atual
    root.classList.add(theme);
  }, [theme]);

  return null; // Componente não renderiza nada
};

export default ThemeInitializer; 