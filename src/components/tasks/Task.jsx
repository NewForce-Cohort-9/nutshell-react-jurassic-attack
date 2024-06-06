import { Button, Card, FormGroup, Input, Label, Row } from "reactstrap";
import { updateTask } from "../services/taskServices.jsx";
import { Link } from "react-router-dom";

export const Task = ({ singleTask, getAndSetTasks }) => {


  const handleCheckComplete = async () => {
    const completedTask = {
      id: singleTask.id,
      userId: singleTask.userId,
      completeByDate: singleTask.completeByDate,
      completed: !singleTask.completed,
    };
    await updateTask(completedTask)
      getAndSetTasks()
  };

  return (
    <>
      {singleTask.completed ? (
        ""
      ) : (
        <Card
          className="my-2"
          color="dark"
          inverse
          style={{
            width: "18rem",
            height: "10rem",
          }}
        >
          <h3>{singleTask.task}</h3>

          <div>Complete By: {singleTask.completeByDate}</div>

          <Row>
            <FormGroup check>
              <Input
                type="checkbox"
                onChange={(event) => handleCheckComplete(event)}
              />
              <Label check>done</Label>
            </FormGroup>
            <Link to={`/TaskEventContainer/${singleTask.id}/editTask`}> <Button color="light" size="sm">
              Edit
            </Button> </Link>
          </Row>
        </Card>
      )}
    </>
  );
};
