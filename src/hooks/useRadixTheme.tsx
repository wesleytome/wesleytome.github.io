import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useRadixTheme = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Atualizar o tema do Radix UI baseado no nosso contexto
    const root = document.documentElement;
    
    // Remover classes anteriores
    root.classList.remove('light', 'dark');
    
    // Adicionar classe atual
    root.classList.add(theme);
    
    // Atualizar atributo data-theme para Radix UI
    root.setAttribute('data-theme', theme);
    
    // Atualizar o atributo appearance do Radix UI Theme
    const radixThemeElement = document.querySelector('[data-radix-theme]');
    if (radixThemeElement) {
      radixThemeElement.setAttribute('data-appearance', theme);
    }
  }, [theme]);

  return theme;
}; 