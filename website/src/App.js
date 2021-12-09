import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div id="dashboard-title">Dashboard</div>
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Home</Link>
        </div>
      </nav>

      <div className="main-container">
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;