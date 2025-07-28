import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useSystemTheme = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Só alterar se o usuário não tiver escolhido manualmente
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };

    // Adicionar listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);
}; 