import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import PostsReducer from '../reducer/posts';

export const  reducers = combineReducers({
    posts:PostsReducer
})




export const makeStore = (reducers, initState) => {
    return createStore(reducers, initState, composeWithDevTools(applyMiddleware(ReduxThunk)))
}


