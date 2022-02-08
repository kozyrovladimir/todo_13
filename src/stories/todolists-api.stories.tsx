import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data);
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>

}
export const CreateTodolist = () => {
    const settings = {
        withCredentials: true,
        headers: {
            'API-KEY': '3223364a-e08c-4c98-95ce-1ba38befaf20'
        }
    }
    const title = 'Old title';
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const todolistID = '3223364a-e08c-4c98-95ce-1ba38befaf20';
    const [state, setState] = useState<any>(null)
    const settings = {
        withCredentials: true,
        headers: {
            'API-KEY': '3223364a-e08c-4c98-95ce-1ba38befaf20'
        }
    }
    useEffect(() => {
        todolistAPI.deleteTodolist(todolistID)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const settings = {
        withCredentials: true,
        headers: {
            'API-KEY': '3223364a-e08c-4c98-95ce-1ba38befaf20'
        }
    }
    const title = 'New name'
    const todolistID = '3223364a-e08c-4c98-95ce-1ba38befaf20';
    useEffect(() => {
        todolistAPI.updateTodolist(todolistID, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

