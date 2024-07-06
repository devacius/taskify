// src/pages/TaskDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../api/tasks';

const TaskDetailsPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTask = async () => {
      const response = await getTaskById(id);
      setTask(response.data.data);
    };

    fetchTask();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Details</h1>
      <div className="p-4 mb-2 border rounded-lg">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
