import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import Article from '../components/Article'
import Pagination from '../components/Pagination'
import usePagination from '../hooks/usePagination'

export default function Home() {
  const [articles, setArticles] = useState([])
  const { currentPage, pages, handlePageChange } = usePagination(articles)
  // in the future migrate fetch to other file and connet API with Redux (redux-thunk)

  useEffect(() => {
    async function getArticles() {
    await fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(articles => setArticles(articles))
    }
    getArticles()
  }, [])
  
  return (
    <>
      <main className="home_main">
        <div className="home_articles_container">
          {articles.length > 0 ? (
            articles.map(data => {
              return <Article key={ data.id } data={ data } page={ currentPage } />
            })
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </main>
      <Pagination elements={articles} pages={pages} handlePageChange={handlePageChange} />
    </>
  )
}
