import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../services/eventServices.jsx";
import { Button, Form, Input } from "reactstrap";
import "./Form.css";

export const EventCreateForm = ({currentUser}) => {
  const [myEvent, setMyEvent] = useState({ title: "", date: "", location: "" });

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newEvent = {
        userId: currentUser.id,
      title: myEvent.title,
      date: myEvent.date,
      location: myEvent.location,
    };
    createEvent(newEvent).then(() => {
      navigate("/TaskEventContainer");
    });
  };

  return (
    <Form>
      <h2>Create New Event</h2>
      <div>
        <Input
          text="text"
          placeholder="Event Title"
          onChange={(event) => {
            const eventCopy = { ...myEvent };
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
            const eventCopy = { ...myEvent };
            eventCopy.date = event.target.value;
            setMyEvent(eventCopy);
          }}
        />
      </div>
      <div>
        <Input
          text="text"
          placeholder="Location"
          onChange={(event) => {
            const eventCopy = { ...myEvent };
            eventCopy.location = event.target.value;
            setMyEvent(eventCopy);
          }}
        />
      </div>

      <fieldset>
        <Button color="dark" onClick={handleSave}>Submit New Event</Button>
      </fieldset>
    </Form>
  );
};
