import { useEffect, useState } from "react"
import "./Tasks.css"

export const Task = () => {
   const [assignedTask, setAssignedTask] = useState(); 
}

useEffect(() => {
    getAllTasks()
})

return(
    <section>
        <header>Tasks</header>
        <div>{task.task}</div>

    </section>
)



// "tasks": [
//     {
//         "id": 1,
//         "userId": 1,
//         "task": "Takeout Trash",
//         "completed": false
//     }
