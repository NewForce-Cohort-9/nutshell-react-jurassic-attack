export const getAllEvents = () => {
    return fetch(`http://localhost:8088/events`).then((res) => res.json())
}

export const createEvents = (events) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(events)
    })
}