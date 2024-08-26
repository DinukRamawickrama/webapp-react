import React from 'react';
import { loginUser } from './api/apiservice';
import logo from './logo.png';

export default function Home() {
    return (
        <div>
            <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
            <h2>Home Page</h2>
            <p>Welcome to Cyphergen!</p>
        </div>
    );
}

