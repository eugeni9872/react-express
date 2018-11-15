import React from "react";
import ReactDOM from 'react-dom';

if(typeof window !== 'undefined') {
    let ComponentData = JSON.parse(window.__INIT__)
    import(`../pages/${ComponentData.currentPage.componente}.js`).then((Component) => {
        ReactDOM.hydrate(<Component.default {...ComponentData.props} />, document.getElementById('app'))
        window.localStorage.removeItem('data');

    })
  }

