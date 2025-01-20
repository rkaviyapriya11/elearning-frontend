import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { UserContextProvider } from './contextapi/UserContext.jsx';
import { CourseContextProvider } from './contextapi/CourseContext.jsx';

export const server = 'https://elearning-backend-1no3.onrender.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
