import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import './App.css';  // Import your styles
import logo from './assets/logo.png';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav className="navbar">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#fff', textDecoration: 'none' }}>
                   <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
           
                </Link>
                    <div className="hamburger" onClick={toggleMenu}>
                        ☰
                    </div>
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
                        <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                    </ul>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

