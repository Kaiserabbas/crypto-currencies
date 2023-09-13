// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Dashboard</h1>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<CryptoList />} />
            <Route path="/crypto-details/:id" element={<CryptoDetails />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
