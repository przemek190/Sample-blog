import React, { useState, useEffect } from 'react'
import '../styles/App.css'

export default function Article() {
    const [isMobile, setIsMobile] = useState({ mobile: false, innerWidth: 0 })
    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900 
            ? setIsMobile({ mobile: true, innerWidth: window.innerWidth })
            : setIsMobile({ mobile: false, innerWidth: window.innerWidth })
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
      }, [])

    return(
        <div className="container">
            <p>Whole article</p>
        </div>
    )
}