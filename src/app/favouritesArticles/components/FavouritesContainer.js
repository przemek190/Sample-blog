import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import '../../../styles/Home.css'
import { Article } from '../../../pages/Home'

// duplicate code with home, to correct


const FavouritesContainer = ( props ) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState(1)
    const articles = props.favourites.list

    useEffect(() => { 
        const getNumOfPages = ( elements ) => {
          setPages(Math.ceil(elements.length / 4))
        }
    
        getNumOfPages(articles)
      }, [articles])
      
      const handlePageChange = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage + 1)
      }

    return(
        <>
            <div className="home_articles_container">
            {articles.length > 0 ? (
                articles.map((data, index) => {
                return <Article key={ index } data={ data } page={ currentPage } />
                })
            ) : (
                <div>
                <p>You don't have any favourites articles</p>
                </div>
            )}
            </div>
            {articles.length > 0 &&             
            <ReactPaginate 
            previousLabel={"← Previous"} 
            nextLabel={"Next →"}
            pageCount={ pages }
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            containerClassName="home_pagination_container"
            activeClassName="home_pagination_active"
            disabledClassName="home_pagination"
            nextLinkClassName="home_pagination_page"
            previousClassName="home_pagination_page"
            pageClassName="home_pagination_page"
            breakClassName="home_pagination"
            onPageChange={ handlePageChange } 
            />}
        </>
    )
}

const mapStateToProps = state => ({
    favourites: state.favourites
})

export default connect(mapStateToProps, {})(FavouritesContainer)