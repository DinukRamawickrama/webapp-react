import React, { useState } from 'react';
import { loginUser } from './api/apiservice';
import logo from './assets/logo.png';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser({ username, password });
            console.log('Login successful:', response);
            alert("Login successful. Token: " + response.Token);
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
                <div>
                    <label>User Name:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label style={{ marginRight: '11px' }}>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <hr />
                <center><button type="submit">Sign In</button></center>
            </form>
        </div>
    );
}
