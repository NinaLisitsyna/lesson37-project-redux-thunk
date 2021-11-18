import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Task from './Task'
import { getTasksByUserId } from "../../store/actionsCreator";
import User from '../Users/User'

const Tasks = () =>{
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)
    const tasks = useSelector (state => state.tasks)


    useEffect(() =>{
        if (currentUser) dispatch (getTasksByUserId(currentUser.id))
    })

    const renderTasks = () => {
        return (
            <div className='list-group'>
                {tasks.map(task => <Task key = {User.id} task = {task}/>)}
            </div>
        )
    }

    return !currentUser ? <h2>Choose User</h2> : renderTasks
}

export default Tasks;