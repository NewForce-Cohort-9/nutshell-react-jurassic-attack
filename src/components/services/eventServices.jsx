export const getAllEvents = () => {
    return fetch(`http://localhost:8088/events`).then((res) => res.json())
}

export const createEvent = (events) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(events)
    })
}
export const getEventById = (event) => {
    return fetch(
        `http://localhost:8088/events/${event}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateEvent = (myEvent) => {
    return fetch(`http://localhost:8088/events/${myEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myEvent)
    })
  }
