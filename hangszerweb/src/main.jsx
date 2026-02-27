import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Fooldal from '../pages/Fooldal';
import Regisztracio from '../pages/Regisztracio';
import Bejelentkezes from '../pages/Bejelentkezes';
import Kosar from '../pages/Kosar';
import Billentyus from '../pages/Billentyus';
import Huros from '../pages/Huros';
import Fuvos from '../pages/Fuvos';
import Utos from '../pages/Utos';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/fooldal" replace />} />
        <Route path="/fooldal" element={<Fooldal />} />
        <Route path="/regisztracio" element={<Regisztracio />} />
        <Route path="/bejelentkezes" element={<Bejelentkezes />} />
        <Route path="/kosar" element={<Kosar />} />
        <Route path="/billentyus" element={<Billentyus />} />
        <Route path="/huros" element={<Huros />} />
        <Route path="/fuvos" element={<Fuvos />} />
        <Route path="/utos" element={<Utos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
