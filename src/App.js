import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Home from './Pages/Home';
import Error404 from './Pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;