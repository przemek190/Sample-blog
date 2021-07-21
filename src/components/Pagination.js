import React from 'react'
import ReactPaginate from 'react-paginate'
import '../styles/Pagination.css'

const Pagination = ( props ) => {

    return(
        <>
            {props.elements.length > 0 &&             
                <ReactPaginate 
                previousLabel={"← Previous"} 
                nextLabel={"Next →"}
                pageCount={ props.pages }
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                containerClassName="home_pagination_container"
                activeClassName="home_pagination_active"
                disabledClassName="home_pagination"
                nextLinkClassName="home_pagination_page"
                previousClassName="home_pagination_page"
                pageClassName="home_pagination_page"
                breakClassName="home_pagination"
                onPageChange={ props.handlePageChange } 
                />
            }
        </>
    )
}

export default Pagination