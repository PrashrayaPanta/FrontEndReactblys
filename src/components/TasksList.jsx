import React, { useEffect, useState } from 'react';
import http from '../http';
import { useNavigate } from 'react-router-dom';

const TasksList = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        navigate("/addtask");
    }

    const handleDeleteTask = (taskId) => () => {
        http.delete(`/tasks/${taskId}`, { withCredentials: true })
            .then(() => http.get("/tasks", { withCredentials: true }))
            .then((response) => {
                setTasks(response.data.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        http.get("/tasks", { withCredentials: true })
            .then((response) => {
                setTasks(response?.data?.data);
            })
            .catch((error) => {
                console.error("Error fetching tasks:", error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Task List</h1>
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
                        onClick={handleAddTask}
                    >
                        Add New Task
                    </button>
                </div>

                {tasks?.length === 0 ? (
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <p className="text-gray-500 text-lg">No tasks found. Add your first task!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {tasks?.map((task) => (
                            <div key={task.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{task?.title}</h3>
                                        <p className="text-gray-600">{task?.description}</p>
                                    </div>
                                    <button 
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm transition duration-200"
                                        onClick={handleDeleteTask(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TasksList;