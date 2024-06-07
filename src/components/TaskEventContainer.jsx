import { Col, Row } from "reactstrap";
import { EventList } from "./events/EventList.jsx";
import { TaskList } from "./tasks/TaskList.jsx";

export const TaskEventContainer = ({currentUser}) => {
  return (
    <Row>
      <Col>
        <EventList currentUser={currentUser} />
      </Col>
      <Col>
        <TaskList currentUser={currentUser}/>
      </Col>
    </Row>
  );
};
