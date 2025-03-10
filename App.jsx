// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Log from './Task4/Log';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Log</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Log />} />
      </Routes>
    </div>
  );
}

export default App;
