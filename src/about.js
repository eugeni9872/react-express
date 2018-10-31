import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios'

require("@babel/polyfill");




class About extends Component {

    static async getData() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/9');
        const responseData = await response.data;
        return responseData;
    }

    render() {
        
        return(
            <div>
                <button onClick={() => this.alert("hola")}>Alert</button>
            </div>
        )
    }
}

export default About;

