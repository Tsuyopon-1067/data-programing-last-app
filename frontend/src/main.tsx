import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DarkThemeProvider } from './components/templetes/DarkThemeProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </React.StrictMode>,
)
