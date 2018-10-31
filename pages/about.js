import React from 'react';


class About extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: 'Eugeni'
        }
    }

    changeName = () => {
        this.setState({name: prompt("Dime tu nombre: ")})
    }
    render() {
       
        return(
            <div>
                <h2>Hola {this.state.  name}</h2>
                <button onClick={this.changeName}>Cambiar nombre</button>
            </div>            
        )
    }
}

export default About;