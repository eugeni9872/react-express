import React, { Component }  from 'react';
import { connect } from 'react-redux';

class Posts extends Component {

    static  getInitalData = async ({ req, res }) => {
        
        return {name: "Eugeni"}
    }


    render(){
        return(
            <div  style={{ background: '#ECECEC', padding: '30px'}}>   
                <h2>HI {this.props.name} </h2>
            </div>
        )
    }

    
}

export default connect()(Posts);