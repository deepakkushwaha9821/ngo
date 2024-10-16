import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Transications from './pages/Transications'; // Correct import
import Products from './pages/Products';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transications' element={<Transications />} /> {/* Make sure this matches */}
        <Route path='/products' element={<Products />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/support' element={<Support />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
