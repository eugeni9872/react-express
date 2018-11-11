const PostsReducer = (state={}, action) => {

    switch (action.type) {
        case 'SAVE_POSTS':
        
            return {...state, posts: action.payload}
        default:
            return {...state}
    }
}


export default PostsReducer;