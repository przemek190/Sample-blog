import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { connect } from 'react-redux'
import actions from '../duck/actions'

const FavouriteArticle = ( props ) => {
    const addArticle = ( ) => {
        for (let i = 0; i < props.favourites.list.length; i++) {
            if (props.favourites.list[i].id === props.data['id']) {
                return;
            }
        }
        props.add(props.data)
    }
    // wrong returned components, to correct
    const CheckFavourites = () => {
        if (props.favourites.list.length === 0) 
            return <FaRegStar size={props.size} className={props.className} />
        else if (props.favourites.list.length > 0) {
            for (let i = 0; i < props.favourites.list.length; i++) {
                if (props.favourites.list[i].id === props.data['id']) {
                    return <FaStar size={props.size} className={props.className} />;
                } else {
                    return <FaRegStar size={props.size} className={props.className} />;
                }
            }
        }
    }
    return(
        <label onClick={addArticle}>
            <CheckFavourites />
        </label>
    )
}

const mapDispatchToProps = dispatch => ({
    add: article => dispatch(actions.add(article))
})

const mapStateToProps = state => ({
    favourites: state.favourites
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteArticle)