import './App.css';
import Home from './pages/Home';
import Interessen from './pages/Interessen';
import Referenzen from './pages/Referenzen';
import Kontakt from './pages/Kontakt';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Interessen' element={<Interessen />} />
            <Route path='/Referenzen' element={<Referenzen />} />
            <Route path='/Kontakt' element={<Kontakt />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);