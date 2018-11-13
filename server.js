import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import { getHTMLTamplate } from './lib/utils';
import { isValid, isValidFile, getCurrentComponent, getRouteWithParams} from './lib/URLParser';
import { start } from 'bling-server';
const path = require('path');
const app =express();
const port = 3000;

app.use('/static', express.static('static'))
app.get('*', async (req,res) => {

    
    //Buscar al componente y ejecutar el metodo "getInitalState" si existe.
    start(req,2);
    res.send("hola")
    //Si la url es valida, miramos que el componente exista.





})

app.listen(port, () => console.log(`Server in ${port}`))