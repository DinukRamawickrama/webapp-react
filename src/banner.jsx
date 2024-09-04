import React, { useState, useEffect } from "react";
import banner1 from "./assets/1b.png";  
import banner2 from "./assets/2b.png";  

export default function Banner() {
    const [currentBanner, setCurrentBanner] = useState(banner1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner(prevBanner => prevBanner === banner1 ? banner2 : banner1);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
            <img src={currentBanner} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    );
}
