import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:1,
        text:'Hello',
    }
    ]
}
// reducers are functions that take the current state and an action, and handle the action by returning a new state
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    } 
})
// export the reducers
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer