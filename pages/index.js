import React from 'react';


class Index extends React.Component{


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