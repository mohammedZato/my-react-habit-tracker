import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./HabitSlice";

const store = configureStore({
    reducer: {
        habit: habitReducer
    }
});

export default store;