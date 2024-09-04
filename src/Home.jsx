import React from 'react';
import Banner from './banner';  // Banner component
import logo from './assets/logo.png';  

export default function Home() {
    return (
        <div>
            <Banner />  

            <h2>Home Page</h2>
            <p>Welcome to Cyphergen!</p>
        </div>
    );
}
