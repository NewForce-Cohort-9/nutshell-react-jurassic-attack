import { Button, Card, FormGroup, Input, Label, Row } from "reactstrap";

export const Task = ({ singleTask }) => {
  return (
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
          <Input type="checkbox" />
          <Label check>done</Label>
        </FormGroup>
        <Button color="light" size="sm">
          Edit
        </Button>
      </Row>
    </Card>
  );
};
