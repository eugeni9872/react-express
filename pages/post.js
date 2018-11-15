import React, {  Component} from 'react';
import axios from 'axios';

class Post extends Component {

    
    static getInitalData = async (ctx) => {

        try{
            const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ctx.params}`)
            return {post : post.data}
        }  catch(e) {
            ctx.res.redirect('/')
            return {}
        }    
        
    }

    constructor(props) {
       
        super(props);

        this.state = {
            
        }
    }


    render() {
        
        return (
            <div>
                <h2>TItle: {this.props.post.title}</h2>
                <div>TItle: {this.props.post.body}</div>
            </div>
        )
    }
}



export default  Post;