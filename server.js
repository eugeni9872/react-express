import express from 'express';
import React from "react";
import Rutas from './Rutas';
import Index from './src/index';
import {registro, App } from './src/_app';
import ReactDOMServer from 'react-dom/server';

const app =express();





const getHTMLTamplate = (title,app, data) => {
    return `
    <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" type="text/css" href="/static/antd.min.css" />
            </head>
            <body>
                
                <script>window.__APP_DATA__=${JSON.stringify(data)}</script>
                <div id="app">${app}</div>
                <script src="/static/bundle.js" async=""></script>
            </body>
        </html>
    `
}





app.use('/static', express.static('static'))

app.get('*', (req,res) => {
        let name = '/about';
        let data = {
            name:'Eugeni'
        }
        Promise.all([
            import(`./src${name}.js`)
        ]).then(([Componente]) => {
            let Comp = registro({data: true})(Componente.default);
          
            const com1 = ReactDOMServer.renderToString(<Comp {...data}/>);
          
            res.send(getHTMLTamplate('ee', com1,'nose'))
        })
    // for(let ruta of Rutas) {
    //     if(req.url.match(ruta.path)) {
           
    //         const name = req.url == '/' ? '/index': req.url;
            
    //         Promise.all([
    //             import(`./src${name}.js`)
    //         ]).then(([Componente]) => {
    //             Componente.default.getData().then(data => {
    //                 registryApp(data,<Componente.default />).then((Comp) => {
    //                     console.log(Comp)
    //                 })
    //                 console.log(component)
    //                 const app = ReactDOMServer.renderToString(<Componente.default data={data}  />);
    //                 let template = getHTMLTamplate('EUGENI SSR', app, data);
                
    //                 res.send(template)
    //             })
    //         })
    //     }
    // }

})

app.listen(3000, () => console.log("3000"))