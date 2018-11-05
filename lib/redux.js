import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state,action) => {


    return {
        ...state
    }
}

let store = createStore(reducer, {main:['soe']}, composeWithDevTools(applyMiddleware()));
console.log(store)
export default store;