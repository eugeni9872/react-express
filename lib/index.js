import React from "react";
import ReactDOM from 'react-dom';

if(typeof window !== 'undefined') {
   
    Promise.all([
        import(`../pages${window.__APP_DATA__.currentPage}.js`),
       ]).then(([
         Import1,
        
        ]) => {
        
         ReactDOM.hydrate(<Import1.default {...window.__APP_DATA__} />, document.getElementById('app'));
         //window.console.clear() 
        });
  }

