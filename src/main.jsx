import './server.js' // must load first so the mock API exists before the router's loaders run
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
  
  </StrictMode>,
)
