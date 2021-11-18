import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addUserList} from '../../store/actionsCreator';
import User from './User';

const Users = () =>{
    const dispatch = useDispatch();
    const users = useSelector (state => state.users)

    useEffect(() =>{
        dispatch (addUserList())
    })

    const renderUsers = () =>{
        return !users.length ? (<p>No available users</p>) : users.map (user => <User key = {user.id} user = {user} /> )
    }
    return(
        <div className='usersList'>
            {renderUsers()}
        </div>
    )

}

export default Users;