import React from "react";
import Hola from './some';

class Index extends React.Component {


    render() {
        
        return <h2>HOla: {this.props.data} <Hola /></h2>
    }
}

export default Index;

