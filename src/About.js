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
                <h2>{this.props.data.title}</h2>
            </div>
        )
    }
}

export default About;

if (typeof window !== 'undefined') {
    ReactDOM.hydrate(<About data={window.__APP_DATA__} />, document.getElementById('app'))
}