import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddNewHabit, handleOnchangeValues } from "../Store/HabitSlice";
import { nanoid } from "@reduxjs/toolkit";


export default function AddHabit() {
    const { habit } = useSelector((state) => state);
    const { habitForm } = habit;

    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(handleOnchangeValues({
            [event.target.name] : event.target.value
        }));
    };

    function handleHabitSubmit(event) {
        event.preventDefault();

        dispatch(handleAddNewHabit({
            id: nanoid(),
            habitName: habitForm.habitName,
            frequency: habitForm.frequency,
            completed: false,
            streak: 0
        }));
    }
    return (
        <div class="pt-12 mx-6">
            <h1 class="mb-3 text-black text-center font-medium">Habit Tracker</h1>
            <form onSubmit={handleHabitSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter Habit Name"
                    id="habitName"
                    class="border bg-gray-50 px-3 w-[22rem] sm:w-[35rem] py-3 text-base focus:border-blue-400 outline-none rounded"
                    name="habitName"
                    value={habitForm.habitName}
                    onChange={handleChange}
                />
                <div class="flex flex-col mt-5">
                    <label class="text-lg font-bold mr-auto mb-1" htmlFor="frequency">Frequency:</label>
                    <select 
                        name="frequency" 
                        id="frequency"
                        class="border bg-gray-50 px-3 py-3 text-base outline-none focus:border-blue-400 rounded"
                        value={habitForm.frequency}
                        onChange={handleChange}
                        > 
                        <option value="">--Choose--</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                    </select>
                </div>
                <div>
                    <button class="w-full mt-4 bg-blue-400 text-black font-bold">Add Habit</button>
                </div>
            </form>
        </div>
    )
}