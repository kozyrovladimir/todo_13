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
    useEffect(() => {
        todolistAPI.deleteTodolist(todolistID)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [inputTitleState, setInputTitleState] = useState<string>('');
    const [inputIDState, setInputIDState] = useState<string>('');
    const [state, setState] = useState<any>(null);
    function onChangeTitleHeandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputTitleState(event.currentTarget.value);
    }
    function onChangeIDHeandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputIDState(event.currentTarget.value);
    }
    function onClickHeandler() {
        todolistAPI.updateTodolist(inputIDState, inputTitleState)
            .then((res) => {
                console.log(res);
            })
    }

    return <div>  
                <span>{JSON.stringify(useState)}</span>
                <input type="text" value={inputTitleState} onChange={onChangeTitleHeandler} placeholder = "Write new title"/>
                <input type="text" value={inputIDState} onChange={onChangeIDHeandler} placeholder = "Write id"/>
                <button onClick={onClickHeandler}>Update title</button>
            </div>
}

