import React from 'react';
import { Route, Routes } from 'react-router';

// components
import Header from './components/Header';

//Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
