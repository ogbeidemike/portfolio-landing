import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import Prism.js CSS theme in main instead of in HTML to avoid content flash
import 'prismjs/themes/prism-tomorrow.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);