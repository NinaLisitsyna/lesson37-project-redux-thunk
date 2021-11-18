import {
    FETCH_USERS,
    FETCH_POSTS,
    FETCH_ALBUMS,
    FETCH_TASKS,
    FETCH_COMMENTS,
    GET_CURRENT_USER,
    GET_CURRENT_POST
} from './actions'

const URL = 'https://jsonplaceholder.typicode.com';

export const UserList = () =>{
    return async (dispatch) =>{
        try{ 
            const response = await fetch (`${URL}/users`);
            const data = await response.json();
            dispatch(addUserList(data))
    } catch(e){
        console.log(e)
     }
}
}

export const getPostsByUserId = (userId) => {
    return async (dispatch) => {
        try {
            dispatch (addPosts([]))
            const response = await fetch(`${URL}/posts?userId=${userId}`)
            const data = await response.json()
            await dispatch(addPosts(data))
            } catch(e){
            console.log( e)
        }
    }
}

export const getCurrentPost = post =>{
    return async dispatch =>{
        try{
            dispatch (setCurrentPost (post))
            const response = await fetch (`${URL}/comments?postId=${post}`)
            const data = await response.json()
            dispatch(addComments(data))
        }catch(e){
            console.log(e)
        }
    }
}

export const removeCurrentPost = () => {
    return dispatch => {
        dispatch( setCurrentPost(null))
        dispatch(addComments([]))
    }
}

export const getTasksByUserId = (userId) =>{
    return async (dispatch) =>{
        try{
            dispatch (addTasks([]))
            const response = await fetch (`${URL}/todos?userId=${userId}`)
            const data = await response.json()
            await dispatch(addTasks(data))
        }catch(e){
            console.log(e)
        }
    }
}

export const getAlbumsByUserId = (userId) =>{
    return async(dispatch) =>{
        try{
            dispatch (addAlbums ([]))
            const response = await fetch(`${URL}/albums?userId=${userId}`)
            const data = await response.json()
            dispatch(addAlbums(data)) 
        }catch(e){
            console.log(e)
        }
    }
}

export const getCurrentUser = (user) =>{
    return {
        type: GET_CURRENT_USER,
        payload: user
    }
}

const addUserList = data =>{
    return {
        type: FETCH_USERS,
        payload: data
    }
}

const addPosts = data => {
    return {
        type: FETCH_POSTS,
        payload: data
    }
}

const setCurrentPost = data =>{
    return {
        type: GET_CURRENT_POST,
        payload: data
    }
}

const addComments = data => {
    return {
        type: FETCH_COMMENTS,
        payload: data
    }
}

const addTasks = data =>{
    return{
        type: FETCH_TASKS,
        payload: data
    }
}

const addAlbums = data =>{
    return {
        type: FETCH_ALBUMS,
        payload: data
    }
}



