import React from 'react';
import { Route, Routes } from 'react-router';

// components
import Header from './components/Header';

//Pages
import Home from './pages/Home';
import Anime from './pages/Anime';
import Category from './pages/Category';

function App() {
  return (
    <div className="">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
