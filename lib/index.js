import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { makeStore, reducers} from './redux';

if(typeof window !== 'undefined') {
    let ComponentData = JSON.parse(window.localStorage.getItem('data'))
    Promise.all([
        import(`../pages${ComponentData.currentPage}.js`),
       ]).then(([
         Import1,
        ]) => {
            const store = makeStore(reducers, {...ComponentData.props})
           
            ReactDOM.hydrate(
               
                <Provider store={store}>
                    <Import1.default {...ComponentData.props} />
                </Provider>
                , document.getElementById('app'));

            window.localStorage.removeItem('data');
        });
  }


