import React from 'react';
import axios from 'axios';

class Index extends React.Component{

    static  getInitalData = async ({ res }) => {

        return {}
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