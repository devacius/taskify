// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import EditTaskPage from './pages/EditTaskPage';
import AddTaskPage from './pages/AddTaskPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
