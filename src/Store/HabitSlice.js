import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habitsList: [],
    habitForm: {
        habitName: "",
        frequency: "",
        completed: false,
        streak: 0,
    }

}
export const habitSlice = createSlice({
    name: "habit",
    initialState,
    reducers: {
        handleOnchangeValues: (state, action) => {
            let cpyHabitForm = {...state.habitForm};
            cpyHabitForm = {
                ...cpyHabitForm,
                ...action.payload
            };
            state.habitForm = cpyHabitForm;
        },
        handleAddNewHabit: (state, action) => {
            state.habitsList.push({
                ...action.payload
            });

            state.habitForm = {
                habitName: "",
                frequency: ""
            }

            localStorage.setItem("habits", JSON.stringify(state.habitsList));
        },
        handleDeleteHabit: (state, action) => {
            const { payload } = action;
            const { currentHabitId } = payload;

            let cpyHabitsList = [...state.habitsList];
            cpyHabitsList = cpyHabitsList.filter(singleHabit => singleHabit.id !== currentHabitId);
            state.habitsList = cpyHabitsList;

            localStorage.setItem("habits", JSON.stringify(state.habitsList));
        },
        markCompleted: (state, action) => {
            const { payload } = action;
            const { currentHabitId } = payload;
            let cpyHabitsList = [...state.habitsList];
            cpyHabitsList = cpyHabitsList.map(singleHabit => {
                if (singleHabit.id === currentHabitId) {
                    if (singleHabit.completed) {
                        // Already completed, so unmark it
                        return {
                            ...singleHabit,
                            completed: false
                        }
                    } else {
                        // Not completed, so mark it and increase the streak
                        return { 
                            ...singleHabit, 
                            streak: singleHabit.streak + 1, 
                            completed: true 
                        };
                    }
                }
                return singleHabit;
            });
            state.habitsList = cpyHabitsList;
        },
    }
})

export const { handleOnchangeValues, handleAddNewHabit, handleDeleteHabit, markCompleted } = habitSlice.actions;

export default habitSlice.reducer;