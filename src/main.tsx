import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import './global.css';

import { I18nextProvider } from "react-i18next";
import i18n from './lib/i18next.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
