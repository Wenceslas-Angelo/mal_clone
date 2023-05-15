import React from 'react';
import { Route, Routes } from 'react-router';

// components
import Header from './components/Header';

//Pages
import Home from './pages/Home';
import Anime from './pages/Anime';

function App() {
  return (
    <div className="">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
      </Routes>
    </div>
  );
}

export default App;
