const fs = require('fs');
const path = require('path');
require("@babel/polyfill");



/**
 * 
 * @param {String} url La url actual de la peticion.
 * @returns False si la url no es valida, || la URL
 */
export const isValid = (url) => {

    //Miramos que la peticion no sea un  archivo estatico.
    if(url.indexOf('.') >0 ) {
        //Archivo estatico
        return false
    }

    return url;

}

/**
 * 
 * @description  Metodo que mira si el componente del directorio pages existe.
 * Recuerda que todos los archivos que hay en ese directorio, se mapean como URL.
 * @param {String} fileName
 * @returns {Boolean} true si el archivo existe, false en caso contrario. 
 */
export const checkFileFromUrl = (fileName="") => {

}

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
   
    return new Promise((resolve, reject) => {
        import(`../pages/${url}.js`).then((Component) => {
            let componentData = {
                Component:Component,
                data:null
            }
            //Primero miramos si implemente el metodo getInitalData

           if(typeof Component.default.getInitalData == 'function' ) {
                Component.default.getInitalData(req).then(data => {
                    
                    if(typeof data === 'undefined') {
                        throw new Error(`La function getInitalData del componente ${Component.default.name} no ha devuelto ningun valor`)
                    }
                    console.log(componentData)
                    componentData.data = data
                    resolve(componentData)
                })


           } else {
            resolve(componentData)
           }
        })

    })
       
       

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