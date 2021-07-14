import React, { useState, useEffect } from 'react'
import './styles/App.css'
import ReactPaginate from 'react-paginate'
import Header from './components/Header'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [albums, setAlbums] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function getData() {
    await fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(response => response.json())
      .then(data => setArticles(data))
    await fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(response => response.json())
      .then(data => setAlbums(data))
    }
    getData()
  }, [])

  const getNumOfPages = (elements) => {
    setPages(Math.ceil(elements.length / 4))
  }

  useEffect(() => { 
    getNumOfPages(articles)
    if (articles.length > 0) setIsLoading(false)
    else setIsLoading(true)
  }, [articles])

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage + 1)
  }

  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="articles_container">
          {articles.length > 0 ? (
            articles.map(data => {
              return <Article data={ data } page={ currentPage } />
            })
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </main>
      <ReactPaginate 
          previousLabel={"← Previous"} 
          nextLabel={"Next →"}
          pageCount={pages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          containerClassName="pagination_container"
          activeClassName="pagination_active"
          disabledClassName="pagination_disabled"
          nextLinkClassName="pagination_next"
          previousClassName="pagination_previous"
          pageClassName="pagination_page"
          breakClassName="pagination_break"
          onPageChange={handlePageChange} 
          />
    </div>
  )
}

export function Article({ data, page }) {
  const { body, id, title, userId } = data;
  return(
    <React.Fragment key={id}>
      {(id > ((page - 1) * 4) && id <= (page * 4)) && (
        <div key={id} className="article_container">
          <p className="article_title">{title}</p>
          <button type="button" className="article_button">
            Czytaj więcej
          </button>
        </div>
      )}
    </React.Fragment>
  )
}