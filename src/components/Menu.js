import React from 'react'
import '../styles/Menu.css'
import { useHistory } from 'react-router-dom'

export default function Article() {
    let history = useHistory();

    return(
        <div className="menu_backdrop">
            <div className="menu_container">
                <div className="menu_text_container">
                    <button type="button" className="menu_nav_button" onClick={() => history.push('/')}>
                        Home
                    </button>
                    <button type="button" className="menu_nav_button" onClick={() => history.push('/favourites')}>
                        Favourties
                    </button>
                </div>
            </div>            
        </div>
    )
}
