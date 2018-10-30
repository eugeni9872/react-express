import React from "react";
import ReactDOM  from 'react-dom';
import About from "./About";
export default class Index extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            name: ""
        }
    }
     componentDidMount() {
        this.setState({ name : this.props.data.name })
      
    }

    handle = () => {
        console.log("joder")
    }
    render() {
        if(typeof window !== 'undefined') {
            
            return (
                <div>
                    <h2>Hola: {this.state.name} </h2>
                    <About />
                </div>
            )
        }else {
            return(<h2>Loading...</h2>)
        }
    }
}



//Si estamos en la parte del cliente.
if (typeof window !== 'undefined') {
     ReactDOM.hydrate(<Index data={window.__APP_DATA__} />, document.getElementById('app'))
}

