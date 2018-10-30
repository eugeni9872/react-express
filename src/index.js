import React from "react";
import Hola from './some';
import ReactDOM from 'react-dom';
class Index extends React.Component {


    render() {
        
        return <h2>HOla: {this.props.data} <Hola /></h2>
    }
}

export default Index;