const fs = require('fs');
const path = require('path');
const React = require('react');
require('@babel/polyfill');



/**
 * @description  Metodo que mira si existe la carpeta "pages".
 * @throws Error
 */
export const existPages = () => {
    let folderPath = path.resolve(process.cwd(),'pages')
    if(!fs.existsSync(folderPath)) {
        throw new Error("No se ha encotrado la carpeta pages")
    }
}

/**
 * @description Metodo que busca en la carpeta "pages", el componente que el usuario esta intentando pedir.
 */

export const isValidFile = (fileSearch="") => {
    existPages();
    
    let folderPath = path.resolve(process.cwd(),'pages')
    //Vamos a mirar si "fileSearch" tiene o no el caracter '/',
    let searchingFile = fileSearch.charAt('0') === '/' ? fileSearch.replace('/', ""): fileSearch
    let files = fs.readdirSync(folderPath);    
    let directoryFile = files.map(file => file.substring(0,file.indexOf('.')).toLowerCase())
    
    if(directoryFile.includes(searchingFile)) {
        return true;
    }


    return false;
}



/**
 * 
 * @param {String} urlPath = El path que esta visitando el usuario
 * @param {Function } fn  Callback
 * @returns Object
 */
export const getCurrentComponent = async ({req,res }, url) => {
   
    let Component = await import(`../pages/${url}.js`)
    
     let componentProps = typeof Component.default.getInitalData == 'function' ? await Component.default.getInitalData({req,res}): {}
    
     Component.props = componentProps;
    return <Component.default { ...componentProps} />;
    

}

export const getRouteWithParams = (route) => {
    let requestUrl = route === '/' ? '/index': route;
    let ruta = requestUrl.split('/');
    let ob = {
        componente: ruta[1],
        params: ruta[2]
    }
    return ob;
}