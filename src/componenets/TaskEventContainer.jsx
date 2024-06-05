import { Col, Row } from "reactstrap";
import { EventList } from "./events/EventList.jsx";
import { TaskList } from "./tasks/TaskList.jsx";

export const TaskEventContainer = () => {
  return (
    <Row>
      <Col>
        <EventList />
      </Col>
      <Col>
        <TaskList />
      </Col>
    </Row>
  );
};
