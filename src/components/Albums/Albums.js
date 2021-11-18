import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Album from './Album';
import { getAlbumsByUserId } from "../../store/actionsCreator";
import User from "../Users/User";

const Albums = () =>{
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)
    const albums = useSelector (state => state.albums)

    useEffect (() =>{
        if (currentUser) dispatch (getAlbumsByUserId(currentUser.id))
    })

    const renderAlbums = () =>{
        return(
            <div className='list-group'>
            {albums.map(album => <Album key = {User.id} album = {album}/>)}
        </div>
        )
    }
    return !currentUser ? <h2>Choose User</h2> : renderAlbums
}

export default Albums;