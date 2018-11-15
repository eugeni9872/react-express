import React, { Component }  from 'react';
import axios from 'axios';
import { Card, Col, Row, Button } from 'antd';

class Index extends Component {

    static getInitalData = async (ctx) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const dataResponse = await response.data;
       
        return {posts: dataResponse}
    }


    render(){
        return(
            <div  style={{ background: '#ECECEC', padding: '30px'}}>   
                <h2 style={{textAlign:'center'}}>Mostrando {this.props.posts.length-1} posts </h2>
                <Row  gutter={16}>
                    {this.props.posts.map((post, index) =>
                        (   
                            <Col key={index} span={8} style={{marginTop:'20px', height:'200px' }}>
                    
                                <Card title={post.title} bordered={false}>
                                <p>{post.body}</p>
                                <Button onClick={() => window.location.href=`/post/${post.id}`}>See more</Button>
                                </Card>
            
                            </Col>
                        ))}
                    
                    </Row>
            </div>
        )
    }

    
}

export default Index;