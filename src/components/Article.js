import React from 'react'
import FavouriteArticle from '../app/favouritesArticles/components/FavouriteArticle'
import { useHistory } from 'react-router-dom'

export default function Article({ data, page }) {
    const { id, title } = data;
    let history = useHistory();
  
    return(
      <React.Fragment>
        {(id > ((page - 1) * 4) && id <= (page * 4)) && (
          <div key={id} className="home_article_container">
            <FavouriteArticle data={data} className="home_comment_favourite" size={30} />
            <p className="home_article_title">{title}</p>
            <button type="button" className="home_article_button" onClick={() => history.push({pathname: '/article', state: data})}>
              Czytaj więcej
            </button>
          </div>
        )}
      </React.Fragment>
    )
  }