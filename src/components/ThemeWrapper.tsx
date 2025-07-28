import React from 'react';
import { Theme } from '@radix-ui/themes';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Theme appearance={theme} accentColor="gray">
      {children}
    </Theme>
  );
};

export default ThemeWrapper; 