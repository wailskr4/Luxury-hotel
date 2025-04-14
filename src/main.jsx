import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HashRouter>

    <App />
    </HashRouter>
    </StrictMode>
)
