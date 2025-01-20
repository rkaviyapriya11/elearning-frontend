import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { UserContextProvider } from './contextapi/UserContext.jsx';
import { CourseContextProvider } from './contextapi/CourseContext.jsx';

export const server = 'http://localhost:5000';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
