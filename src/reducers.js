import { combineReducers } from "redux";
import favouritesReducer from "./app/favouritesArticles/duck";

const rootReducer = combineReducers({
    favourites: favouritesReducer
})

export default rootReducer