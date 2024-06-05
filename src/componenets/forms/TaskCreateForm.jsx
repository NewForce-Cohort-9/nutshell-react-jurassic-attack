import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTasks } from "../services/tasksServices.jsx";
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
      <h2>Create New Task</h2>
      <div>
        <Input
          text="text"
          placeholder="Tasks Title"
          onChange={(event) => {
            const eventCopy = { ...myTasks };
            eventCopy.title = event.target.value;
            setMyEvent(eventCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          text="text"
          placeholder="Date"
          onChange={(event) => {
            const eventCopy = { ...myTasks };
            eventCopy.date = event.target.value;
            setMyEvent(eventCopy);
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
