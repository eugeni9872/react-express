export const getHTMLTamplate = (title,app, object) => {
    let bundleName = JSON.parse(object).currentPage.componente;
    return `
    <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" type="text/css" href="/static/antd.min.css" />
            </head>
            <body>
                
                
                <script>window.__INIT__ = ${JSON.stringify(object)}</script>
                <div id="app">${app}</div>
                <script src="/static/${bundleName}.bundle.js" async=""></script>
            </body>
        </html>
    `
}