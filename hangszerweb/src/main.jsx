import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Fooldal from '../pages/Fooldal';
import Regisztracio from '../pages/Regisztracio';
import Bejelentkezes from '../pages/Bejelentkezes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/fooldal" replace />} />
        <Route path="/fooldal" element={<Fooldal />} />
        <Route path="/regisztracio" element={<Regisztracio />} />
        <Route path="/bejelentkezes" element={<Bejelentkezes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
