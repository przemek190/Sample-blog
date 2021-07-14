import React, { useState, useEffect } from 'react'
import '../styles/Header.css'
import { FaAlignJustify } from 'react-icons/fa'
import { Link, Route, Switch} from 'react-router-dom'

export default function Header({ img="sampleLogo.png" }) {
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
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vw'}}>
            {isMobile.mobile ? (
            <label style={{width: '20vw', display: 'flex', justifyContent: 'center'}}>
                <FaAlignJustify size={ isMobile.innerWidth < 900 ? 35 : 25 } style={{ alignSelf: 'flex-start' }} />
            </label>
            ) : <label style={{width: '20vw', display: 'flex', justifyContent: 'center'}}/>}
            <img alt="logo" src={ img } className="logo" />
            <div style={{width: '20vw'}} />
            </div>
            <div className="navbar">
                <Label title="Favourites" />
                <Label title="Home" />
            </div>

            <Switch>
                <Route path="/siema" exact></Route>
            </Switch>
        </div>
    )
}

function Label({ title }) {
    return (
        <div className="label_container">
            <p className="label_text">{ title }</p>
        </div>
    )
}