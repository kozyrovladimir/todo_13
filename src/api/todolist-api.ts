import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '3223364a-e08c-4c98-95ce-1ba38befaf20'
    }
})

export const todolistAPI = {
    getTodolists() {
        return instance.get('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post('todo-lists', {title})
    },
    deleteTodolist(id: string) {
        return instance.delete(`todo-lists/${id}`)
    },
    updateTodolist(id: any, title: any) {
        return instance.put(`todo-lists/${id}`, {title})
    },
}