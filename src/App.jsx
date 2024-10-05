import React from "react";
import { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar";
import Photos from "./Components/Photos";
import About from "./Components/About";
import Login from "./Components/Login";
function App() {

  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <Navbar/>

      <Routes>

      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/photos" element={isAuthenticated ? <Photos /> : <Navigate to="/login" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="*" element={<div><h1>404 - Page Not Found</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;
