{/* AUTHOR: Chelsea Brooks | PURPOSE: Task Fetch Calls */}

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

export const updateTask = (task) => {
    return fetch(`http://localhost:8088/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  };
  
  export const getTaskById = (task) => {
    return fetch(
        `http://localhost:8088/tasks/${task}?_expand=user`
      ).then((res) => res.json());
  }