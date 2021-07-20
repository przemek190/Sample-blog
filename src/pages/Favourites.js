import React from 'react'
// in the future add the craco to shorten the path
import FavouritesContainer from '../app/favouritesArticles/components/FavouritesContainer'
import '../styles/App.css'

// Incorret displaying articles, to improve
// In the future create posibility to add comments to favourites
export default function Favourites() {
    return(
        <div className="container">
            <FavouritesContainer />
        </div>
    )
}