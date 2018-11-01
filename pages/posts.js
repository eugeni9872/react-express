import React, { Component }  from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';


class Posts extends Component {

    static getInitalData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const dataResponse = await response.data;
        return {posts: dataResponse}
    }

    render(){
        return(
            <div  style={{ background: '#ECECEC', padding: '30px'}}>   
                <h2 style={{textAlign:'center'}}>Mostrando 100 posts </h2>
                <Row  gutter={16}>
                    {this.props.posts.map((post, index) =>
                        (   
                            <Col key={index} span={8} style={{marginTop:'20px', height:'200px' }}>
                    
                                <Card title={post.title} bordered={false}>
                                <p>{post.body}</p>
                                </Card>
            
                            </Col>
                        ))}
                    
                    </Row>
            </div>
        )
    }

    
}

export default Posts;