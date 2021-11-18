import {
    FETCH_USERS,
    FETCH_POSTS,
    FETCH_ALBUMS,
    FETCH_TASKS,
    FETCH_COMMENTS
} from './actions'


const initialState = {
    users: [],
    posts: [],
    comments: [],
    albums: [],
    tasks: []
}

export const reducer = (state = initialState, {type, payload})=>{
    switch(type){
        case FETCH_USERS:
            return{...state, users: payload};

        case FETCH_POSTS:
            return{...state, posts: payload};

        case FETCH_ALBUMS:
            return{...state, albums: payload};

        case FETCH_TASKS:
            return{...state, tasks: payload};

        case FETCH_COMMENTS:
            return{...state, comments: payload};

            default: 
            return state
    }
}

