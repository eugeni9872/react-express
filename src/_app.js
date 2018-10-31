import React, {  Component} from 'react';
import ReactDOM from 'react-dom';

export class App extends Component {


    render(){
        return(<h2>Hola</h2>)
    }
}

export const registro = (props) => (Wrapper) =>{
    if(typeof window !== 'undefined') {
        ReactDOM.hydrate(<Wrapper {...props} />, document.getElementById('app'))
    }

    return Wrapper 
}


