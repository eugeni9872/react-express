import React from "react";
import ReactDOM  from 'react-dom';
import About from "./about";
import axios from 'axios'
require("@babel/polyfill");

export default class Index extends React.Component {

    static async getData() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/9');
        const responseData = await response.data;
        return responseData;
    }


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
       
            console.log(this.props)
            return (
                <div>
                    <h2>Hola: {this.props.data.name} </h2>
                </div>
            )
    }
}



//Si estamos en la parte del cliente.
/* if (typeof window !== 'undefined') {
     ReactDOM.hydrate(<Index data={window.__APP_DATA__} />, document.getElementById('app'))
} */