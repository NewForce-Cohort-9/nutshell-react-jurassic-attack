{/* AUTHOR: Chelsea Brooks | PURPOSE: List of all Tasks */}

import React, { useState, useEffect } from "react";
import "./Tasks.css";
import { getAllTasks } from "../services/taskServices.jsx";
import { Task } from "./Task.jsx";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const TaskList = ({currentUser}) => {
  const [allTasks, setAllTasks] = useState([]);
  const [userTasks, setUserTasks] = useState([]);

  const getAndSetTasks = async () => {
    getAllTasks()
      .then((taskArray) => {setAllTasks(taskArray)})
  }
useEffect(() => {
  getAndSetTasks()
},[])

useEffect(() => {
  const foundTasks = allTasks.filter(
    (eachTask) => eachTask.userId === currentUser.id
  );
  setUserTasks(foundTasks);
}, [allTasks]);

  return (
    <div className="task-container">
      <header className="header-tasks">Tasks</header>
      <Link to="/TaskEventContainer/createTask"><Button outline size="sm">Create New Task</Button></Link>
      {userTasks.map((singleTask) => {
        return <Task key={singleTask.id} singleTask={singleTask} getAndSetTasks={getAndSetTasks}/>;
      })}
    </div>
  );
};
