import React from 'react';


class Index extends React.Component{

    static  getInitalData = async ({ res }) => {

        //Aqui podemos ver si el usuario tiene una sesion por ejemplo.

        //Redireccionar 
        //res.redirect('/about')
        console.log(res)
        return {seeMe: true}
    }

    render() {
        

        return(
            <div>
                <h2>Hola Index</h2>
                <button onClick={() => alert("hii")}>
                    Saludar
                </button>


            </div>
        )
    }
}

export default Index;