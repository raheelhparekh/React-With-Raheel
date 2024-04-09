import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {id:1,
        title: "To Do meesage",
        completed: false
        },

        
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});


// This is a custom hook that will be used to consume the context
export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;