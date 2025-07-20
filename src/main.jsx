import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollWrapper from './components/scrollWrapper.jsx'
import CustomCursor from './components/customCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollWrapper>
      <CustomCursor />
    <App />
    </ScrollWrapper>
  </StrictMode>,
)
