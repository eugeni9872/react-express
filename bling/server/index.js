import React from "react";
import ReactDOMServer from 'react-dom/server';

import { isValid, isValidFile, getCurrentComponent, getRouteWithParams} from '../../lib/URLParser';



export const start = async (request,response) => {
    let requestUrl = getRouteWithParams(request.url);
    if(isValid(requestUrl.componente) !== false) {
        //Si el archivo esta, lo mapeamos.
        if(isValidFile(requestUrl.componente) === true ) {
            //Vamos a mirar si ya tenemos el redux registrado en nuestro request.
            // req.params =  requestUrl.params

            let {Component, data } = await getCurrentComponent({request,response},requestUrl.componente);
            let StringComponent = ReactDOMServer.renderToString(<Component.default {...data} />)
            // let html = getHTMLTamplate('EUGENI SSR', StringComponent,JSON.stringify({currentPage:requestUrl,props: data}),requestUrl.componente)
            console.log(StringComponent);
            // res.send(html)
        }
    }
}


