import React from 'react';
import { savePosts } from '../reduxActions/PostsActions';
class Index extends React.Component{

    static  getInitalData = async ({ req, res }) => {
        let dispatch = await req.reduxState.dispatch;
        await dispatch(savePosts([1,2,3]))
        return {}
    }

    render() {
        

        return(
            <div>
                <h2>Hola Index</h2>
                <button onClick={() => alert("hii")}>
                    Saludar
                </button>


            </div>
        )
    }
}

export default Index;