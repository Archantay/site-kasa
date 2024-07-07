import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout.js';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos.js';
import Logement from './pages/Logement';
import Erreur from './pages/Erreur';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="*" element={<Erreur />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;