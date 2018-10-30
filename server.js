import express from 'express';
import React from "react";
import Rutas from './Rutas';
const app =express();
import Index from './src/index';
import ReactDOMServer from 'react-dom/server';




const getHTMLTamplate = (title,app) => {
    return `
    <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" type="text/css" href="/static/antd.min.css" />

            </head>

            <body>

                <div id="app">${app}</div>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    `
}





app.use('/static', express.static('static'))

app.get('/', (req,res) => {

    const app = ReactDOMServer.renderToString(<Index data={"nose"} />);

    res.send(getHTMLTamplate('EUGENI SSR', app))
})




app.listen(3001, () => console.log("3001"));