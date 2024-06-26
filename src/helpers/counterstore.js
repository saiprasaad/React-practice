import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter += 1;
        },
        decrement: (state, action) => {
            state.counter -= 1;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default counterStore;
