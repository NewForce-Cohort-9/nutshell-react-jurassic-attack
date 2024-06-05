import { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventServices.jsx";
import { Event } from "./Event.jsx";

export const EventList = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((eventArray) => {
      setAllEvents(eventArray);
    });
  }, []);

  return (
    <div>
        {allEvents.map((singleEvent) => {
            return <Event id={singleEvent.id} singleEvent={singleEvent}/>
        })}
    </div>
  )
};
