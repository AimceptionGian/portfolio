import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Interessen from './pages/Interessen';
import Referenzen from './pages/Referenzen';
import Kontakt from './pages/Kontakt';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Interessen' element={<Interessen />} />
        <Route path='/Referenzen' element={<Referenzen />} />
        <Route path='/Kontakt' element={<Kontakt />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
