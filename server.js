import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import App from './lib/_app';

import { isValid, existPages, isValidFile, getCurrentComponent } from './lib/URLParser';

const app =express();



const getHTMLTamplate = (title,app, object) => {
    return `
    <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" type="text/css" href="/static/antd.min.css" />
            </head>
            <body>
                
                <script>window.__APP_DATA__= ${JSON.stringify(object)}</script>
                <div id="app">${app}</div>
                <script src="/static/bundle.js" async=""></script>
            </body>
        </html>
    `
}



app.use('/static', express.static('static'))

app.get('*', (req,res) => {

    
    //Buscar al componente y ejecutar el metodo "getInitalState" si existe.
    let requestUrl = req.url  === '/' ? '/index': req.url;
    //Si la url es valida, miramos que el componente exista.
    if(isValid(requestUrl) !== false) {
        //Si el archivo esta, lo mapeamos.
        if(isValidFile(requestUrl) === true ) {
            
            getCurrentComponent(req,requestUrl, (CurrentData) => {
                let {Component, data } = CurrentData;
                //let currentView = ReactDOMServer.renderToString(<Component.default {...data} />)
                let componente = ReactDOMServer.renderToString(<Component.default   />)

                res.send(getHTMLTamplate('EUGENI SSR', componente,{ 
                        currentPage:requestUrl,
                        props: data
                }))
            })
        }else {
            res.send({status: 404, message:'Not found'})
        }

    }




})

app.listen(3000, () => console.log("3000"))