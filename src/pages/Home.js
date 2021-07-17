import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function getData() {
    await fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(data => setArticles(data))
    }
    getData()
  }, [])

  useEffect(() => { 
    const getNumOfPages = (elements) => {
      setPages(Math.ceil(elements.length / 4))
    }

    getNumOfPages(articles)
  }, [articles])

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage + 1)
  }

  return (
    <>
      <main className="home_main">
        <div className="home_articles_container">
          {articles.length > 0 ? (
            articles.map(data => {
              return <Article key={data.id} data={ data } page={ currentPage } />
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
          containerClassName="home_pagination_container"
          activeClassName="home_pagination_active"
          disabledClassName="home_pagination_disabled"
          nextLinkClassName="home_pagination_next"
          previousClassName="home_pagination_previous"
          pageClassName="home_pagination_page"
          breakClassName="home_pagination_break"
          onPageChange={handlePageChange} 
          />
    </>
  )
}

export function Article({ data, page }) {
  const { body, id, title, userId } = data;
  let history = useHistory();

  return(
    <React.Fragment>
      {(id > ((page - 1) * 4) && id <= (page * 4)) && (
        <div key={id} className="home_article_container">
          <p className="home_article_title">{title}</p>
          <button type="button" className="home_article_button" onClick={() => history.push({pathname: '/article', state: data})}>
            Czytaj więcej
          </button>
        </div>
      )}
    </React.Fragment>
  )
}