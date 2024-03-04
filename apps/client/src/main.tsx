import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TRPCQueryProvider } from './TRPCQueryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TRPCQueryProvider>
      <App />
    </TRPCQueryProvider>
  </React.StrictMode>
);
