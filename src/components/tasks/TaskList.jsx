import React, { useState, useEffect } from "react";
import "./Tasks.css";
import { getAllTasks } from "../services/taskServices.jsx";
import { Task } from "./Task.jsx";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((taskArray) => {
      setAllTasks(taskArray);
    });
  }, []);

  return (
    <div>
      <header className="header-tasks">Tasks</header>
      <Link to="/createTask"><Button outline size="sm">Create New Task</Button></Link>
      {allTasks.map((singleTask) => {
        return <Task id={singleTask.id} singleTask={singleTask} />;
      })}
    </div>
  );
};
