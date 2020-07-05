import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import axios from 'axios'

function Main() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        api.get("/tasks")
            .then(res => {
                console.log(res.data)
                setTasks(res.data)
            })
    }, [])

    return (
        <div>
            {tasks.map(task => (
                <h1 key={task.id}>{task.title}</h1>
            ))}
        </div>

    )
}

export default Main