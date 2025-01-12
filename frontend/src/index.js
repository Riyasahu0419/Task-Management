// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import './App.css';

// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to use `react-dom/client`
import App from './components/App'; // Ensure the path to App is correct
import './App.css'; // CSS file import

// import TaskForm from './components/Tasks/TaskForm';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
       
       
    </React.StrictMode>
);
