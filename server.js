import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import { getHTMLTamplate } from './lib/utils';
import { Provider } from 'react-redux';
import { makeStore, reducers } from './lib/redux';
import { isValid, existPages, isValidFile, getCurrentComponent } from './lib/URLParser';
const app =express();
existPages();
const port = 3000;





app.use('/static', express.static('static'))

app.get('*', async (req,res) => {

    
    //Buscar al componente y ejecutar el metodo "getInitalState" si existe.
    let requestUrl = req.url  === '/' ? '/index': req.url;
    //Si la url es valida, miramos que el componente exista.
    if(isValid(requestUrl) !== false) {
        //Si el archivo esta, lo mapeamos.
        if(isValidFile(requestUrl) === true ) {

            //Vamos a mirar si ya tenemos el redux registrado en nuestro request.
             
            
            
            getCurrentComponent({req,res},requestUrl, async (CurrentData, request) => {
                let {Component, data } = CurrentData;
                    if(typeof req.redux === 'undefined') {
                       req.redux = makeStore(reducers, {...data});
                    }
                let componente = ReactDOMServer.renderToString
                
                (
                
                    <Provider store={req.redux}>
                        <Component.default {...data} />
                    </Provider>
                )
                


                res.send(getHTMLTamplate('EUGENI SSR', componente,JSON.stringify({ 
                    currentPage:requestUrl,
                    props: data
                })))
            })
        }else {
            res.send({status: 404, message:'Not found'})
        }

    }




})

app.listen(port, () => console.log(`Server in ${port}`))