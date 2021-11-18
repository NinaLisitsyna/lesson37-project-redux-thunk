import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import { getPostsByUserId } from "../../store/actionsCreator";

const Posts = () =>{
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)
    const posts = useSelector (state => state.posts)


    useEffect(() =>{
        if (currentUser) dispatch (getPostsByUserId(currentUser.id))
    })

    const renderPosts = () => {
        return (
            <div className='list-group'>
                {posts.map(post => <Post key = {post.id} post = {post}/>)}
            </div>
        )
    }

    return !currentUser ? <h2>Choose User</h2> : renderPosts
}

export default Posts;
