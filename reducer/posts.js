const PostsReducer = (state={posts: []}, action) => {

    switch (action.type) {
        case 'SAVE_POSTS':
            return {...state, posts: state.posts.concat(action.payload)}
        default:
            return {...state}
    }
}


export default PostsReducer;