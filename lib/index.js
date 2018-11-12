import React from "react";
import ReactDOM from 'react-dom';

if(typeof window !== 'undefined') {
    let ComponentData = JSON.parse(window.localStorage.getItem('data'))
    Promise.all([
        import(`../pages/${ComponentData.currentPage.componente}.js`),
       ]).then(([
         Import1,
        ]) => {
           
            ReactDOM.hydrate(
               
                <Import1.default {...ComponentData.props} />
                , document.getElementById('app'));

            window.localStorage.removeItem('data');
        });
  }


