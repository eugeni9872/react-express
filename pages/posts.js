import React, { Component }  from 'react';
import axios from 'axios';


class Posts extends Component {

    static getInitalData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const dataResponse = await response.data;
        return {posts: dataResponse}
    }

    render(){
        return(
            <div>
               {this.props.posts.map((post, index) =>
                (   
                    <div key={index}>
                        <h4>Title: {post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
               
            </div>
        )
    }

    
}

export default Posts;