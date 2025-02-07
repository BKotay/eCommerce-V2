import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css';
import './css/Footer.css';
import './css/Product.css';
import './css/Header.css'
import './css/Hero.css'
import './css/ImageSlider.css'
import './css/Product.css'
import './css/Motivation.css'
import './css/AboutUs.css'
import './css/Contact.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
