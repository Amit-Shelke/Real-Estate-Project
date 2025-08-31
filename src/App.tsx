import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import PropertyListings from './pages/PropertyListing';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertyListings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Dashboard />} />
            <Route path="/sell" element={<PropertyListings />} />
            <Route path="/rent" element={<PropertyListings />} />
            <Route path="/agents" element={<PropertyListings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;