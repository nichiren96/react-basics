import React, { useState } from "react";
import TaskService from "../../services/task.service";
import "./taskboard.css";

export const TaskBoard = () => {
  const [task, setTask] = useState("");
  const taskService = new TaskService();

  const handleSubmit = function () {
    console.log(`INSIDE HANDLE SUBMIT => ${task}`);
    if (task)
      taskService
        .addTask({ label: task })
        .then((result) => console.log(result));
  };

  return (
    <div className="task-board">
      <h1>Task Board</h1>
      <input
        type="text"
        placeholder="buy milk"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="submitBtn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
