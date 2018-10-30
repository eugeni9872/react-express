import express from 'express';
import React from "react";
import Rutas from './Rutas';
import Index from './src/index';
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

    let initData = {
        name:'Eugeni',
        posts: [
            {title:'Title1', content:'Content1'},
            {title:'Title2', content:'Content2'}
        ]
    }

    const app = ReactDOMServer.renderToString(<Index  />);
    let template = getHTMLTamplate('EUGENI SSR', app, initData);

    res.send(template)
})




app.listen(3001, () => console.log("3001"));