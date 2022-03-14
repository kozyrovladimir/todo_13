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
    const title = 'Old title';
    const [state, setState] = useState<any>(null)
    const [inputState, setInputState] = useState<string>('')

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputState(event.currentTarget.value);
    }
    function  onClickHandler() {
        todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>
        <span>{JSON.stringify(state)}</span>
        <input type="text" value={inputState} onChange={onChangeHandler} placeholder={'ToDo List Name'}/>
        <button onClick={onClickHandler} >Create</button>
    </div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [inputState, setInputState] = useState<string>('')

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputState(event.currentTarget.value)
    }
    function  onClickHandler() {
        todolistAPI.deleteTodolist(inputState)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>
        <span>{JSON.stringify(state)}</span>
        <input type="text" value={inputState} onChange={onChangeHandler} placeholder={'ToDo List ID'}/>
        <button onClick={onClickHandler} >Delete</button>
    </div>
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
        todolistAPI.updateTodolistTitle(inputIDState, inputTitleState)
            .then((res) => {
                console.log(res);
            })
    }

    return <div>
        <span>{JSON.stringify(useState)}</span>
        <input type="text" value={inputTitleState} onChange={onChangeTitleHeandler} placeholder="Write new title"/>
        <input type="text" value={inputIDState} onChange={onChangeIDHeandler} placeholder="Write id"/>
        <button onClick={onClickHeandler}>Update title</button>
    </div>
}

export const GetTasks = () => {
    const [inputIDState, setInputIDState] = useState<string>('');
    const [tasksState, setTasksState] = useState<Array<TaskType> | null>(null);

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
        <span>{JSON.stringify(tasksState)}</span>
        <input type="text" value={inputIDState} onChange={onChangeIDHeandler} placeholder="Write id"/>
        <button onClick={onClickHeandler}>Get tasks</button>
        {tasksState ? tasksState.map((item) => {
                return <span>{item.title}</span>
            })
            : <span>Нет тасок</span>}
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
        <input type="text" value={inputIDState} onChange={onChangeIDHeandler} placeholder="Write id"/>
        <input type="text" value={inputTaskTitleState} onChange={onChangeTaskTitleHeandler}
               placeholder="Write new task title"/>
        <button onClick={onClickHeandler}>Create task</button>
    </div>
}

export const DeleteTask = () => {
    const [inputTodolistIDState, setinputTodolistIDState] = useState<string>('');
    const [inputTaskIDState, setInputTaskIDState] = useState<string>('');
    const [state, setState] = useState<any>(null);

    function onChangeTodolistID(event: React.ChangeEvent<HTMLInputElement>) {
        setinputTodolistIDState(event.currentTarget.value);
    }

    function onChangeInputTaskID(event: React.ChangeEvent<HTMLInputElement>) {
        setInputTaskIDState(event.currentTarget.value);
    }

    function onClickHeandler() {
        todolistAPI.deleteTask(inputTodolistIDState, inputTaskIDState)
            .then((res) => {
                setState(res);
            })
    }

    return <div>
        <span>{JSON.stringify(useState)}</span>
        <input type="text" value={inputTodolistIDState} onChange={onChangeTodolistID} placeholder="Write ToDo List ID"/>
        <input type="text" value={inputTaskIDState} onChange={onChangeInputTaskID} placeholder="Write task ID"/>
        <button onClick={onClickHeandler}>Delete Task</button>
    </div>
}
