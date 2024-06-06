export const getAllTasks = () => {
    return fetch(`http://localhost:8088/tasks`).then((res) => res.json())
}

export const createTasks = (tasks) => {
    return fetch(`http://localhost:8088/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tasks)
    })
}