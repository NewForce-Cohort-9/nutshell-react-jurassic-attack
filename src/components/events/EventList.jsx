{/* AUTHOR: Chelsea Brooks | PURPOSE: List of all Events */}

import { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventServices.jsx";
import { Event } from "./Event.jsx";
import { Button, Col, Row } from "reactstrap";
import "./Events.css";
import { Link } from "react-router-dom";

export const EventList = ({currentUser}) => {
  const [allEvents, setAllEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((eventArray) => {
      setAllEvents(eventArray);
    });
  }, []);

  useEffect(() => {
    const foundEvents = allEvents.filter(
      (eachEvent) => eachEvent.userId === currentUser.id
    );
    setUserEvents(foundEvents);
  }, [allEvents]);


  return (
    <div>
      <header className="header-events">Events</header>
      <div>
      <Link to="/TaskEventContainer/createEvent"><Button 
      outline size="sm">
        Create New Event
      </Button></Link>
      {userEvents.map((singleEvent) => {
        return <Event key={singleEvent.id} singleEvent={singleEvent} />;
      })}
      </div>
    </div>
  );
};
