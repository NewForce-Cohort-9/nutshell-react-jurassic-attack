{/* AUTHOR: Chelsea Brooks | PURPOSE: Nutshell Form to Edit an existing Task for display*/}

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../services/taskServices";

export const EditTask = () => {
  const [myTask, setMyTask] = useState({});
  const { taskId } = useParams();

  useEffect(() => {
    getTaskById(taskId).then((data) => {
      const taskObj = data;
      setMyTask(taskObj);
    });
  }, [taskId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedTask = {
      task: myTask.task,
      id: myTask.id,
      userId: myTask.userId,
      completeByDate: myTask.completeByDate,
    };
    updateTask(editedTask).then(() => {
      navigate("/TaskEventContainer");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2>Edit Task</h2>
        <fieldset>
          <div>
            <input
              text="text"
              className="form-control"
              placeholder={myTask.task}
              onChange={(event) => {
                const taskCopy = { ...myTask };
                taskCopy.task = event.target.value;
                setMyTask(taskCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div >
            <input
              text="text"
              className="form-control"
              placeholder={myTask.completeByDate}
              onChange={(event) => {
                const taskCopy = { ...myTask };
                taskCopy.completeByDate = event.target.value;
                setMyTask(taskCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
        <button className="form-btn" btn-info onClick={handleSave}>
            Save Task
          </button>
        </fieldset>
      </form>
    </div>
  );
};
