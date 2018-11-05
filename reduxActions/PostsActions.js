export const savePosts = (posts) => dispatch => {
    return dispatch({type:'SAVE_POSTS', payload: posts})
}