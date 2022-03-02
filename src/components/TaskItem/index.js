import React from "react";
import "./taskitem.css";

export const TaskItem = ({ label }) => {
  return (
    <div className="task-item">
      <span>{label}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
