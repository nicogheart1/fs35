import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NuovoComponente from './nuovoComponente.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NuovoComponente />
    <App />
  </StrictMode>,
)
