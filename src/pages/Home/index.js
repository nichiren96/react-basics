import React from "react";
import { TaskBoard } from "../../components/TaskBoard";
import { TaskList } from "../../components/TaskList";

export const HomePage = () => {
  return (
    <>
      <TaskBoard />
      <TaskList />
    </>
  );
};
