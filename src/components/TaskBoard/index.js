import React from "react";
import "./taskboard.css";

export const TaskBoard = () => {
  return (
    <div className="task-board">
      <h1>Task Board</h1>
      <input type="text" placeholder="buy mikl" />
      <button>Submit</button>
    </div>
  );
};
