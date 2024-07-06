// src/pages/AddTaskPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTaskPage = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    time: '',
    category: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/tasks/add`, task);
      if (response.data.success) {
        alert('Task created successfully');
        navigate('/');
      } else {
        alert('Failed to create task: ' + response.data.msg);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Time</label>
          <input
            type="time"
            name="time"
            value={task.time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            name="category"
            value={task.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a category</option>
            <option value="Games">Games</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Meeting">Meeting</option>
            <option value="Sport">Sport</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;
