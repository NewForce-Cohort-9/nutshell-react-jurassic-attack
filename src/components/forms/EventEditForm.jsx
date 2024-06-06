import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEventById, updateEvent } from "../services/eventServices";

export const EditEvent = () => {
  const [myEvent, setMyEvent] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    getEventById(eventId).then((data) => {
      const eventObj = data;
      setMyEvent(eventObj);
    });
  }, [eventId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedEvent = {
      title: myEvent.title,
      id: myEvent.id,
      userId: myEvent.userId,
      date: myEvent.date,
      location: myEvent.location,
    };
    updateEvent(editedEvent).then(() => {
      navigate("/TaskEventContainer");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2>Edit Event</h2>
        <fieldset>
          <div>
            <input
              text="text"
              className="form-control"
              placeholder={myEvent.title}
              onChange={(event) => {
                const eventCopy = { ...myEvent };
                eventCopy.title = event.target.value;
                setMyEvent(eventCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div >
            <input
              text="text"
              className="form-control"
              placeholder={myEvent.date}
              onChange={(event) => {
                const eventCopy = { ...myEvent };
                eventCopy.date = event.target.value;
                setMyEvent(eventCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div >
            <input
              text="text"
              className="form-control"
              placeholder={myEvent.location}
              onChange={(event) => {
                const eventCopy = { ...myEvent };
                eventCopy.location = event.target.value;
                setMyEvent(eventCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
        <button className="form-btn" btn-info onClick={handleSave}>
            Save Event
          </button>
        </fieldset>
      </form>
    </div>
  );
};
