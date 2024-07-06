// src/components/Notification.js
import React from 'react';

const Notification = ({ msg, type }) => {
  return (
    <div className={`p-4 mb-4 text-sm ${type === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'} rounded-lg`} role="alert">
      {msg}
    </div>
  );
};

export default Notification;
