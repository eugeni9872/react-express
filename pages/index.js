import React from 'react';
class Index extends React.Component{

     static  getInitalData = async ({ req, res }) => {
         return {name: "Eugeni"}
     }

    render() {
        

        return(
            <div>
                <h2>Hola {this.props.name} </h2>
                <button onClick={() => alert("hii")}>
                    Saludar
                </button>


            </div>
        )
    }
}

export default Index;