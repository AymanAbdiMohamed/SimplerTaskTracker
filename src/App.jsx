import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavigationBar from './components/NavigationBar';
import TaskDashboard from './components/TaskDashboard';
import AddTaskPage from './components/AddTaskPage';
import AboutPage from './components/AboutPage';
import { fetchTasks, updateTask, deleteTask } from './api/tasks';

/**
 * App Component - Main application with routing and global state
 * Manages tasks state and provides it to child components
 */
function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial tasks on mount
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const response = await fetchTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to add a new task to state
  const addTaskToState = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to update a task
  const handleUpdateTask = async (taskId, updatedData) => {
    const response = await updateTask(taskId, updatedData);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? response.data : task
      )
    );
  };

  // Function to delete a task
  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Toast notifications provider */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
        
        {/* Navigation bar */}
        <NavigationBar />
        
        {/* Main content with routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <TaskDashboard 
                tasks={tasks} 
                loading={loading}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
              />
            } 
          />
          <Route 
            path="/add" 
            element={<AddTaskPage onTaskAdded={addTaskToState} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
