import React, { useEffect, useState } from 'react';
import http from '../http';
import { useNavigate } from 'react-router-dom';

const TasksList = () => {

    const navigate = useNavigate();

    const handleAddTask = () => {


        console.log("Hello");
        

        navigate("/addtask")

    }


    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        http.get("/tasks", { withCredentials: true })
            .then((response) => {
                setTasks(response.data.data); // Assuming tasks are in `response.data.data`
            })
            .catch((error) => {
                console.error("Error fetching tasks:", error);
            });
    }, []);

    return (
        <div className='p-2'>
            <div class="text-right">
                <button class="bg-red-400 px-5 py-2" onClick={handleAddTask}>Add</button>
            </div>

            <h1>Task List</h1>
            {tasks.length === 0 ? (
                <p>No tasks found.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button className='bg-red-400 p-2'>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TasksList;