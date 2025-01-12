# Task-Management


## Description
This project is a full-stack task management application that allows users to create, edit, delete, and view tasks. It features user authentication, enabling users to securely manage their tasks. The application is built using Node.js, Express, MongoDB, and React. The goal of this project is to provide a user-friendly interface for managing personal tasks efficiently, ensuring that users can keep track of their responsibilities and deadlines in an organized manner.

## Features
- **User Authentication**: Secure sign-up and login functionality using JWT (JSON Web Tokens) to protect user data.
- **Task Management**: Users can create, read, update, and delete tasks, allowing for comprehensive task oversight.
- **Responsive Design**: Built with  CSS for a mobile-friendly interface that adapts to various screen sizes.
- **User Dashboard**: A personalized dashboard displaying all tasks and their statuses, providing a quick overview of user responsibilities.

## Technologies Used

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication

### Frontend:
- React
- CSS

## Installation Instructions

### Clone the repository:
```bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
```
### Set up the backend:
#### Navigate to the backend directory and install dependencies:
```
cd backend
npm install
```
### Create a .env file in the backend directory with the following content:
```
PORT= 4000
MONGO_URI="mongodb+srv://RiyaSahu:Riya%40123@cluster0.ohieplv.mongodb.net/task_management"
JWT_SECRET="@#^(^%&*)@$#$%^!#@$#%$^^%^&$&^?)"
```
### Start the backend server:
```
npm start
```
### Set up the frontend:
#### Navigate to the frontend directory and install dependencies:

```
cd ../frontend
npm install
```
#### Start the frontend server:
```
npm start
```
### Usage
- Sign Up: Navigate to the sign-up page to create a new account.
- Log In: Use your credentials to log in and access task management features.
- Add Task: Click the add task button, fill in the details, and save.
- View Task: Click on a task to view its details.
- Edit Task: Use the edit button to update task information.
- Delete Task: Click the delete button to remove a task from your list.
- 
### API Documentation
#### Authentication
```
POST /api/auth/signup: Create a new user account.
POST /api/auth/login: Authenticate a user and receive a token.
```
### Tasks

```
GET /api/tasks: Retrieve all tasks for the authenticated user.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update an existing task by ID.
DELETE /api/tasks/:id: Delete a task by ID.
```

### Live Demo
You can view the live application here: 
https://vercel.com/riya-sahus-projects/task-management

### GitHub repository up to date:

#### Stage the changes (after editing files):
```
git add .
```

### Commit the changes:
```
git commit -m "Description of the changes"
```
### Push the changes to GitHub:
```
git push origin master
```
