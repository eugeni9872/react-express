import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import { getHTMLTamplate } from './lib/utils';
import { isValid, existPages, isValidFile, getCurrentComponent } from './lib/URLParser';

const app =express();
existPages();
const port = 3000;





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
                let componente = ReactDOMServer.renderToString(<Component.default {...data}   />)

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

app.listen(port, () => console.log(`Server in ${port}`))