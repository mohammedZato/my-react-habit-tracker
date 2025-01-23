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
                            <div key={singleHabit.id} class="flex flex-col justify-start items-start mt-4 mb-2 border px-3 mx-6 py-4 bg-gray-400 rounded sm:flex sm:flex-row">
                                <div class="mb-2 sm:mr-auto">
                                    <h2 class="font-bold text-black text-xl">{singleHabit.habitName}</h2>
                                    <h3 class="text-[17px] text-gray-800">{singleHabit.frequency}</h3>
                                    <h3 class="font-medium text-black">Streak Days: {singleHabit.streak}</h3>
                                </div>
                                <button onClick={() => onMarkComplete(singleHabit.id)} class="bg-white font-bold text-blue-500 mb-2 sm:mr-2">{singleHabit.completed ? "UnMark" : "Mark as Complete"}</button>
                                <button onClick={() => onDeleteHabit(singleHabit.id)} class="bg-red-400 font-bold text-white hover:outline-none">Delete</button> 
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}