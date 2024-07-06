// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getTasks } from '../api/tasks';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data.data);
    };

    fetchTasks();
  }, [tasks]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link to="/add-task" className="bg-blue-500 text-white p-2 rounded">Add New Task</Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
