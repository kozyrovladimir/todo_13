import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '3223364a-e08c-4c98-95ce-1ba38befaf20'
    }
})

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type TaskChangesType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type GetTasksResponseType = {
    items: Array<TaskType>
    totalCount: number
    error: string
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type CreateTaskResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        item: TodolistType
    }
}

type DeleteTaskResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>('todo-lists');
    },
    createTodolist(title: string) {
        return instance.post<CreateTodolistResponseType>('todo-lists', {title});
    },
    deleteTodolist(id: string) {
        return instance.delete<DeleteTodolistResponseType>(`todo-lists/${id}`);
    },
    updateTodolistTitle(id: any, title: any) {
        return instance.put(`todo-lists/${id}`, {title});
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`);
    },
    createTasks(todolistId: string, title: string) {
        return instance.post<CreateTaskResponseType>(`todo-lists/${todolistId}/tasks`, {title});
    },
    changeTask(todolistId: string, taskId: string, changes: TaskChangesType) {
        return instance.post<CreateTaskResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, {...changes});
    },
    deleteTask(todolistId: string, taskId: string,) {
        return instance.delete<DeleteTaskResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    }
}