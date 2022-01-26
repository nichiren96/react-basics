import React from "react";
import "./tasklist.css";
import { TaskItem } from "../TaskItem";

export const TaskList = () => {
  return (
    <div className="task-list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};
