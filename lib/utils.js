export const getHTMLTamplate = (title,app, object, file="") => {
    console.log(file);
    return `
    <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" type="text/css" href="/static/antd.min.css" />
            </head>
            <body>
                
                
                <script>window.localStorage.setItem('data', ${JSON.stringify(object)})</script>
                <div id="app">${app}</div>
                <script src="/static/${file}.bundle.js" async=""></script>
            </body>
        </html>
    `
}