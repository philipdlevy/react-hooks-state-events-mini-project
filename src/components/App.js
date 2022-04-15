import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [taskData, setTaskData] = useState(TASKS)
  const [categoryData, setCategoryData] = useState("All")

  function deleteTask(text) {
  
    const newArray = taskData.filter((task) => task.text !== text);
    setTaskData(newArray);
  }

  function handleCategoryFilter(event) {
    setCategoryData(event.target.value)
  }

  const categoryFilter = CATEGORIES.filter((category) => category !== "All")

  const visibleTasks = taskData.filter((task) => {
    return categoryData === "All" || task.category === categoryData;
  })

  function onTaskFormSubmit(newTask) {
    setTaskData([...taskData, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSelectedCategory={setCategoryData} categories={CATEGORIES} selectedCategory={categoryData} />
      <NewTaskForm categories={categoryFilter} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={visibleTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
