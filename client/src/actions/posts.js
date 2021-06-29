import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPost()
        const action = {type: 'FETCH_ALL', payload: []}
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (e) {
        console.log(e.message)
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({type: 'CREATE_POST', payload: data})
    } catch (e) {
        console.log(e.message)
    }
}
export const updatePost = (post, postId) => async (dispatch) => {
    try {

    } catch (e) {

    }
}