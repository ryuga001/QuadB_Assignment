# React To-Do App

A full-featured task management application built with React, Redux, and Material UI. This app allows users to create, view, and manage tasks, and provides features such as task prioritization, due dates, and location tracking. The app also supports localStorage persistence using Redux Persist.

## Features

- **Create Tasks**: Add tasks with a title, description, due date, priority, and location.
- **Task Status**: Mark tasks as completed or pending.
- **Task Overview**: Shows a detailed view of task along with the current weather condition at the task location.
- **Prioritize Tasks**: Set priority levels for tasks (High, Medium, Low).
- **Filter Tasks**: Filter tasks by completion status (Completed, Pending).
- **Task Persistence**: Tasks are saved and loaded from localStorage using Redux Persist, ensuring data persists across browser sessions.
- **User Authentication**: Simple authentication feature to restrict access to the app for authenticated users only.
- **Responsive Design**: Fully responsive layout with Material UI components, ensuring the app works on both mobile and desktop devices.

---

## Usage

After starting the development server, you can use the app by following these steps:

1. **Login**: If you're not authenticated, you'll be prompted to log in. Enter demo credentials to access the app.
2. **Create Tasks**: Click on the "Add Task" button to open the task creation form."
3. **View Tasks**: Once tasks are added, you can view them on the homepage. Tasks can be filtered by their completion status (Completed, Pending).
4. **Tasks Detail**: On clicking view button you can see a detailed view of task along with task's location weather condition currently helps for outdoor task.
5. **Update Tasks**: You can mark them as completed, or delete them.
6. **Logout**: If you wish to log out, click on the logout button in the navigation.

---

## Installation

To set up and run the Task Management app locally, follow the steps below:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ryuga001/QuadB_Assignment.git
   ```

2. **Navigate to the project directory**:


3. **Install dependencies**:

   Ensure you have `Node.js` and `npm` installed. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. **Start the development server**:

   Once the dependencies are installed, start the local development server:

   ```bash
   npm start
   ```
   
---

  ## Technologies
  
This project uses the following technologies:

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for handling global app state.
- **Redux Toolkit**: Simplifies Redux setup and reduces boilerplate.
- **Redux Persist**: Persists Redux state to localStorage.
- **Material UI**: React UI library for building modern, responsive interfaces.
- **React Router**: Library for navigation and routing in React apps.
- **WeatherAPI**



---
