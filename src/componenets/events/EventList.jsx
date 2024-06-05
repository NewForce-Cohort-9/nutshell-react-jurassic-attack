import { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventServices.jsx";
import { Event } from "./Event.jsx";
import { Button, Col, Row } from "reactstrap";
import "./Events.css";

export const EventList = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((eventArray) => {
      setAllEvents(eventArray);
    });
  }, []);

  return (
    <div>
      <header className="header-events">Events</header>
      <Button outline size="sm">
        Create New Event
      </Button>
      {allEvents.map((singleEvent) => {
        return <Event id={singleEvent.id} singleEvent={singleEvent} />;
      })}
    </div>
  );
};
