import React from "react";
import ReactDOM  from 'react-dom';
import About from "./About";
export default class Index extends React.Component {


    componentDidMount() {
        //window.__APP_DATA__ = {};
        console.log("Index mount")
    }
    render() {
        console.log(this.props)

        return (<div>

            <h2>HOla: </h2>

            <h2>HOla Component: </h2>

             <About />
        </div>)
    }
}



//Si estamos en la parte del cliente.
if (typeof window !== 'undefined') {
     ReactDOM.hydrate(<Index data={window.__APP_DATA__} />, document.getElementById('app'))
}

