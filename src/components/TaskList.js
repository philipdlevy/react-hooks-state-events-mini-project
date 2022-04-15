import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  // console.log("tasks", tasks)

const displayTasks = tasks.map((task) => {
  return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask} />
})



  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
