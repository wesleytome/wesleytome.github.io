import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/ThemeWrapper';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </ThemeProvider>
  </StrictMode>,
)
