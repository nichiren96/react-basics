import React from "react";
import "./taskitem.css";

export const TaskItem = () => {
  return (
    <div className="task-item">
      <span>Walt the cat</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
