import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteHabit, markCompleted } from "../Store/HabitSlice";

export default function HabitList() {
    const { habit } = useSelector(state => state);
    const { habitsList } = habit;
    const dispatch = useDispatch();

    function onDeleteHabit(id) {
        dispatch(handleDeleteHabit({
            currentHabitId: id
        }));
    };

    function onMarkComplete(id) {
        dispatch(markCompleted({
            currentHabitId: id
        }));
    };

    return (
        <div>
            <ul>
                {
                    habitsList &&
                    habitsList.map(singleHabit => {
                        return (
                            <div key={singleHabit.id} class="flex items-center mt-4 mb-2 border px-3 py-4 bg-gray-200 rounded">
                                <div class="mr-auto">
                                    <h2 class="font-bold text-xl">{singleHabit.habitName}</h2>
                                    <h3 class="text-[17px] text-gray-500">{singleHabit.frequency}</h3>
                                    <h3 class="font-medium">Streak Days: {singleHabit.streak}</h3>
                                </div>
                                <button onClick={() => onMarkComplete(singleHabit.id)} class="bg-white font-bold text-blue-500 mr-2">{singleHabit.completed ? "UnMark" : "Mark as Complete"}</button>
                                <button onClick={() => onDeleteHabit(singleHabit.id)} class="bg-red-400 font-bold text-white hover:outline-none">Delete</button> 
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}