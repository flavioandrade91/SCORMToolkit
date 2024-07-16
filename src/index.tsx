import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa o arquivo CSS principal
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registra o service worker para habilitar PWA
serviceWorkerRegistration.register();

// Se você deseja medir o desempenho da sua aplicação
reportWebVitals();
