import React, { useState, useEffect } from "react";
import "./Tasks.css";
import { getAllTasks } from "../services/taskServices.jsx";
import { Task } from "./Task.jsx";

export const TaskList = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((taskArray) => {
      setAllTasks(taskArray);
    });
  }, []);

  return (
    <div>
      {allTasks.map((singleTask) => {
       return <Task id={singleTask.id} singleTask={singleTask}/>;
      })}
    </div>
  );
};
