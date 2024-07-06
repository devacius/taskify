// src/api/tasks.js
import axios from 'axios';

const API_URL = 'http://localhost:3002/api/tasks';

export const getTasks = async () => {
  return await axios.get(API_URL);
};

export const getTaskById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createTask = async (task) => {
  return await axios.post(API_URL, task);
};

export const updateTask = async (id, updatedTask) => {
  return await axios.put(`${API_URL}/${id}`, updatedTask);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
