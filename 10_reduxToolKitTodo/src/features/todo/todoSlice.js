import { createSlice, nanoid } from "@reduxjs/toolkit";
// nano id is just used to generate unique id 


//always declare an initial state with default values. here allTodos is an array of objects that stores all the todos
const initialState={
    allTodos:[{
        id:1,
        text:'Hello',
    }
    ]
}
// reducers are functions and functionality. state and action are part of syntax
export const todoSlice = createSlice({
    name: 'todo', // just the name of the slice
    initialState, // initial state from above
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.allTodos.push(todo)
        },
        removeTodo: (state, action) => {
            state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload)
        }
    } 
})

// export the reducers
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer