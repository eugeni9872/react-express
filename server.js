import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import { getHTMLTamplate } from './lib/utils';
import { isValid, isValidFile, getCurrentComponent, getRouteWithParams} from './lib/URLParser';
const path = require('path');
const app =express();
const port = 3000;



app.use('/static', express.static('static'))

app.get('*', async (req,res) => {

    //Buscar al componente y ejecutar el metodo "getInitalState" si existe.
    let requestUrl = getRouteWithParams(req.url);

    //Si la url es valida, miramos que el componente exista.
    if(isValid(requestUrl.componente) !== false) {
        //Si el archivo esta, lo mapeamos.
        if(isValidFile(requestUrl.componente) === true ) {

            //Vamos a mirar si ya tenemos el redux registrado en nuestro request.
            req.params =  requestUrl.params
            let {Component, data } = await getCurrentComponent({req,res},requestUrl.componente );
            let StringComponent = ReactDOMServer.renderToString( <Component.default {...data} />)
            let html = getHTMLTamplate('EUGENI SSR', StringComponent,JSON.stringify({currentPage:requestUrl,props: data}),requestUrl.componente)
            res.send(html)
        }else {
            res.sendFile( path.resolve('html','404.html') )
        }

    }




})

app.listen(port, () => console.log(`Server in ${port}`))