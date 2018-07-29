import posts from '../components/posts/reducer/reducers'
import card from '../components/card/reducer/reducers'
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    post:posts,
    card:card
})

export default rootReducer;