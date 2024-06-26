import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex((t) => t === action.payload);
            if(index != -1) {
                return state.filter((_, i) => i !== index);
            }
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;


const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})

export default store;