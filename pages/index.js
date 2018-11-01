import React from 'react';


class Index extends React.Component{

    static getInitalData = ({ res }) => {

        //Aqui podemos ver si el usuario tiene una sesion por ejemplo.

        //Redireccionar 
        //res.redirect('/about')
        
        return {seeMe: true}
    }

    render() {
        console.log(this.props)

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