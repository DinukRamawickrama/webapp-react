import React, { useState } from 'react';
import { registerUser } from './api/apiservice';
import logo from './assets/logo.png';

export default function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await registerUser({ username, password, email });
            console.log('Registration successful:', response);
            alert("User registered successfully");
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
            <h2>Registration</h2>
            <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
                <div>
                    <label>User Name:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label style={{ marginRight: '11px' }}>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label style={{ marginRight: '45px' }}>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <hr />
                <center><button type="submit">Register</button></center>
            </form>
        </div>
    );
}
