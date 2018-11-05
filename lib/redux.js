import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import PostsReducer from '../reducer/posts';

let reducers = combineReducers({
    posts:PostsReducer
})



let store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;