{/* AUTHOR: Chelsea Brooks | PURPOSE: Form to Create a new Task for display and adds them to the database*/}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTasks } from "../services/taskServices.jsx";
import { Button, Form, Input } from "reactstrap";
import "./Form.css";

export const TaskCreateForm = ({ currentUser }) => {
  const [myTasks, setMyTasks] = useState({ task: "", completeByDate: "", completed: false});

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newTasks = {
      userId: currentUser.id,
      task: myTasks.task,
      completeByDate: myTasks.date,
      completed: myTasks.completed,
    };
    createTasks(newTasks).then(() => {
      navigate("/TaskEventContainer");
    });
  };

  return (
    <Form>
      <h2 className="header-new-task">Create New Task</h2>
      <div>
        <Input
          type="text"
          text="text"
          placeholder="What's your task?"
          onChange={(event) => {
            const taskCopy = { ...myTasks };
            taskCopy.task = event.target.value;
            setMyTasks(taskCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          text="text"
          placeholder="Date"
          onChange={(event) => {
            const taskCopy = { ...myTasks };
            taskCopy.date = event.target.value;
            setMyTasks(taskCopy);
          }}
        />
      </div>
      <fieldset>
        <Button color="dark" onClick={handleSave}>
          Submit New Tasks
        </Button>
      </fieldset>
    </Form>
  );
};
