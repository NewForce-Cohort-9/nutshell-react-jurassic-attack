import { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventServices.jsx";
import { Event } from "./Event.jsx";
import { Button, Col, Row } from "reactstrap";
import "./Events.css";
import { Link } from "react-router-dom";

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
      <div>
      <Link to="/newEvent"><Button 
      outline size="sm">
        Create New Event
      </Button></Link>
      {allEvents.map((singleEvent) => {
        return <Event id={singleEvent.id} singleEvent={singleEvent} />;
      })}
      </div>
    </div>
  );
};
