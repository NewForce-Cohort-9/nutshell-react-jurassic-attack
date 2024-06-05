import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../services/eventServices.jsx";
import { Button, Form, Input } from "reactstrap";
import "./Form.css";

export const EventCreateForm = () => {
  const [event, setEvent] = useState({ title: "", date: "", location: "" });

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newEvent = {
      title: event.title,
      date: event.date,
      location: event.location,
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
            const eventCopy = { ...event };
            eventCopy.title = event.target.value;
            setEvent(eventCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="date"
          valid
          text="text"
          placeholder="Event Location"
          onChange={(event) => {
            const eventCopy = { ...event };
            eventCopy.date = event.target.value;
            setEvent(eventCopy);
          }}
        />
      </div>
      <div>
        <Input
          text="text"
          placeholder="Event Location"
          onChange={(event) => {
            const eventCopy = { ...event };
            eventCopy.location = event.target.value;
            setEvent(eventCopy);
          }}
        />
      </div>

      <fieldset>
        <Button color="dark" onClick={handleSave}>Submit New Event</Button>
      </fieldset>
    </Form>
  );
};
