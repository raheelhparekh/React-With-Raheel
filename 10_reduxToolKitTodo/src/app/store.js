import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// yeh main.jsx me provider se wrap karege store ko
export const store= configureStore({
    reducer:todoReducer
})