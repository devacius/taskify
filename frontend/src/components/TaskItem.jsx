// src/components/TaskItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskItem = ({ task, onDelete }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/tasks/${task._id}`);
  };

  const handleEdit = () => {
    navigate(`/edit-task/${task._id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`http://localhost:3002/api/tasks/${task._id}`);
      if (data.success) {
        
        alert('Task deleted successfully');
      } else {
        alert('Failed to delete task: ' + data.msg);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="p-4 mb-2 border rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>
      <div>
        <button onClick={handleView} className="mr-2 bg-blue-500 text-white p-2 rounded">
          View
        </button>
        <button onClick={handleEdit} className="mr-2 bg-yellow-500 text-white p-2 rounded">
          Edit
        </button>
        <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
