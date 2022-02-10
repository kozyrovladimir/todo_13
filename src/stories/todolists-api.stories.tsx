import React, {useEffect, useState} from 'react'
import {TaskType, todolistAPI} from "../api/todolist-api";

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

export const GetTasks = () => {
    const [inputIDState, setInputIDState] = useState<string>('');
    const [tasksState,  setTasksState] = useState<Array<TaskType> | null>(null);
    function onChangeIDHeandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputIDState(event.currentTarget.value);
    }
    function onClickHeandler() {
        todolistAPI.getTasks(inputIDState)
            .then((res) => {
                setTasksState(res.data.items);
            })
    }

    return <div>  
                <span>{JSON.stringify(useState)}</span>
                <input type="text" value={inputIDState} onChange={onChangeIDHeandler} placeholder = "Write id"/>
                <button onClick={onClickHeandler}>Get tasks</button>
                {tasksState ? tasksState.map( (item) => {
                    return <span>{item.title}</span>
                })
                 : <span>Нет тасок</span> }
            </div>
}

export const CreateTask = () => {
    const [inputIDState, setInputIDState] = useState<string>('');
    const [inputTaskTitleState, setInputTaskState] = useState<string>('');
    const [infoState, setInfoState] = useState<'no info' | 'successfully' | 'error'>('no info')
    function onChangeIDHeandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputIDState(event.currentTarget.value);
    }
    function onChangeTaskTitleHeandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputTaskState(event.currentTarget.value);
    }
    function onClickHeandler() {
        todolistAPI.createTasks(inputIDState, inputTaskTitleState)
            .then(() => {
                setInfoState('successfully');
            })
            .catch(() => {
                setInfoState('error');
            })
    }

    return <div> 
                <span>{infoState}</span>
                <input type="text" value={inputIDState} onChange={onChangeIDHeandler} placeholder = "Write id"/>
                <input type="text" value={inputTaskTitleState} onChange={onChangeTaskTitleHeandler} placeholder = "Write new task title"/>
                <button onClick={onClickHeandler}>Create task</button>
            </div>
}

