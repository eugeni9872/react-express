import express from 'express';
import React from "react";
import Rutas from './Rutas';
const app =express();
import Index from './src/index';
import ReactDOMServer from 'react-dom/server';








app.use('/static', express.static('static'))

app.get('/', (req,res) => {

    const app = ReactDOMServer.renderToString(<Index data={"nose"} />);
    const html = `
    <link rel="stylesheet" type="text/css" href="/static/main.css">
        ${app}
    `  

    res.send(html)
})


app.get('*', (req,res) => {

    res.send("123")
})

app.listen(3001, () => console.log("3001"));