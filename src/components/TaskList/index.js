import React from "react";
import "./tasklist.css";
import { TaskItem } from "../TaskItem";
import { useState } from "react";
import { useEffect } from "react";
import TaskService from "../../services/task.service";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const taskService = new TaskService();

  useEffect(() => {
    taskService.getTasks().then((result) => setTasks(result.data.todos));
  }, []);

  return (
    <div className="task-list">
      {tasks ? (
        tasks.map((task, index) => {
          return <TaskItem key={index} label={task.label} />;
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
