import React, { useState, useEffect } from 'react'
import './styles/App.css'
import { FaAlignJustify } from 'react-icons/fa'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import Favourites from './pages/Favourites'
import PageNotFound from './pages/PageNotFound'
import Menu from './components/Menu'

export default function App({ img="sampleLogo.png" }) {
    const [isMobile, setIsMobile] = useState({ mobile: false, innerWidth: 0 });
    const [openMenu, setOpenMenu] = useState(false);

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

    const toggleMenu = () => {
      setOpenMenu(!openMenu)
    }

    useEffect(() => {
      if (openMenu) document.body.style.overflow = 'hidden'
      if (!openMenu) document.body.style.overflow = 'unset'
    }, [openMenu])
    
    return(
      <Router>
        <div className="container">
            <div className="logo_container">
              {isMobile.mobile && (
                <label className="menu_button" onClick={() => toggleMenu()}>
                  <FaAlignJustify size={ isMobile.innerWidth < 900 ? 35 : 25 } style={{ alignSelf: 'flex-start' }} />
                </label>
              )}
              <label style={{width: '20vw', display: 'flex', justifyContent: 'center'}}/>
              <img alt="logo" src={ img } className="logo" />
              <div style={{width: '20vw'}} />
            </div>
            {openMenu && <Menu />}
            <div className="navbar">
                <Link to="/favourites" style={{color: 'black', textDecoration: 'none'}}>
                  <Label title="Favourites" />
                </Link>
                <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                  <Label title="Home" />
                </Link>
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/article" exact component={Article} />
                <Route path="/favourites" exact component={Favourites} />
                <Route path="*" exact component={PageNotFound} />
            </Switch>
        </div>
      </Router>
    )
}

function Label({ title }) {
    return (
        <div className="label_container">
            <p className="label_text">{ title }</p>
        </div>
    )
}