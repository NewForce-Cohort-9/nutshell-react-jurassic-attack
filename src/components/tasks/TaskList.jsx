import React, { useState, useEffect } from "react";
import "./Tasks.css";
import { getAllTasks } from "../services/taskServices.jsx";
import { Task } from "./Task.jsx";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const [allTasks, setAllTasks] = useState([]);

  const getAndSetTasks = async () => {
    getAllTasks()
      .then((taskArray) => {setAllTasks(taskArray)})
  }
useEffect(() => {
  getAndSetTasks()
},[])

  return (
    <div>
      <header className="header-tasks">Tasks</header>
      <Link to="/TaskEventContainer/createTask"><Button outline size="sm">Create New Task</Button></Link>
      {allTasks.map((singleTask) => {
        return <Task key={singleTask.id} singleTask={singleTask} getAndSetTasks={getAndSetTasks}/>;
      })}
    </div>
  );
};
