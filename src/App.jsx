import React from "react";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";

function App() {
  return (
    <main class="bg-gray-50 h-screen">
      <AddHabit />
      <HabitList />
    </main>
  )
}

export default App
