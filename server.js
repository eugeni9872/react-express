import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import { getHTMLTamplate } from './lib/utils';
import { isValid, existPages, isValidFile, getCurrentComponent, getRouteWithParams} from './lib/URLParser';
const app =express();
existPages();
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
             
            
            req.params = requestUrl.params
            getCurrentComponent({req,res},requestUrl.componente, async (CurrentData, request) => {
                let {Component, data } = CurrentData;
 
                let componente = ReactDOMServer.renderToString
                
                (
                
                        <Component.default {...data} />
                )
                


                res.send(getHTMLTamplate('EUGENI SSR', componente,JSON.stringify({ 
                    currentPage:requestUrl,
                    props: data
                }),requestUrl.componente))
            })
        }else {
            res.send({status: 404, message:'Not found'})
        }

    }




})

app.listen(port, () => console.log(`Server in ${port}`))