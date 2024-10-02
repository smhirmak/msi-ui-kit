import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import LocalizeProvider from './contexts/locale/LocalizeProvider';
import { ThemeProvider } from './contexts/theme/theme-provider';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ThemeProvider>
    <LocalizeProvider>
      <App />
    </LocalizeProvider>
  </ThemeProvider>,
  // </StrictMode>,
);
