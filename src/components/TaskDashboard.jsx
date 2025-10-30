import React from 'react';
import { Link } from 'react-router-dom';
// import TaskItem from './TaskItem'; // Removed this import as TaskItem is now defined in this file

/**
 * TaskItem - Displays a single task card.
 * @param {Object} props - Component props.
 * @param {Object} props.task - The task object to display.
 * @param {Function} props.onUpdate - Function to call when updating task status.
 * @param {Function} props.onDelete - Function to call when deleting a task.
 */
const TaskItem = ({ task, onUpdate, onDelete }) => {
  // Destructure task properties for easier access
  const { id, title, description, completed, priority } = task || {};

  // Define styles for different priority levels
  const priorityStyles = {
    low: 'bg-green-100 text-green-700 border-green-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    high: 'bg-red-100 text-red-700 border-red-200',
  };

  // Define display text for different priority levels
  const priorityText = {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
  };

  // Get the appropriate styles or default to 'medium'
  const currentPriorityStyles = priorityStyles[priority] || priorityStyles.medium;
  const currentPriorityText = priorityText[priority] || 'Medium';

  return (
    // Task card container. Applies opacity and different background if completed.
    <div className={`bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between transition-all duration-200 ${completed ? 'opacity-60 bg-gray-50' : ''}`}>
      {/* Top section of the card (content) */}
      <div>
        <div className="flex justify-between items-start mb-3">
          {/* Task Title. Applies line-through if completed. */}
          <h3 className={`text-xl font-bold text-gray-800 ${completed ? 'line-through' : ''}`}>{title || 'Untitled Task'}</h3>
          {/* Priority Badge */}
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${currentPriorityStyles}`}>
            {currentPriorityText}
          </span>
        </div>
        {/* Task Description */}
        <p className="text-gray-600 text-sm mb-4">{description || 'No description provided.'}</p>
      </div>
      
      {/* Bottom section of the card (actions) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-4 border-t border-gray-100">
        {/* Complete/Incomplete Button */}
        <button
          onClick={() => onUpdate(id, { ...task, completed: !completed })}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            completed
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' // Style for "Mark as Incomplete"
              : 'bg-sky-500 text-white hover:bg-sky-600' // Style for "Mark as Complete"
          }`}
        >
          {/* Icon changes based on 'completed' state */}
          {completed ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          )}
          {completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        
        {/* Delete Button */}
        <button
          onClick={() => onDelete(id)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-500 bg-red-50 hover:bg-red-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          Delete
        </button>
      </div>
    </div>
  );
};


/**
 * TaskCardSkeleton - A loading placeholder component displayed while tasks are being fetched.
 * Renders a pulsing skeleton UI to mimic the layout of a task card.
 */
const TaskCardSkeleton = () => {
  return (
    // Skeleton card container
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      {/* Animation wrapper */}
      <div className="animate-pulse">
        {/* Skeleton header (task title and icon) */}
        <div className="flex justify-between mb-3">
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        </div>
        {/* Skeleton content (task description lines) */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * TaskDashboard - Main dashboard component for displaying all tasks.
 * Manages the layout for the header, task grid, loading state, and empty state.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.tasks - Array of task objects from global state.
 * @param {Boolean} props.loading - Loading state from the parent App component.
 * @param {Function} props.onUpdateTask - Function to update a task's status.
 * @param {Function} props.onDeleteTask - Function to delete a task.
 */
function TaskDashboard({ tasks, loading, onUpdateTask, onDeleteTask }) {
  return (
    // Main container with a gradient background
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Header Section */}
        <header className="mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              {/* Header Title and Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-rose-300 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Task Dashboard
                    </h1>
                  </div>
                </div>
                <p className="text-gray-600 text-base">
                  Manage and track your tasks efficiently
                </p>
                {/* Task count badge */}
                <div className="mt-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-50 to-sky-100 text-sky-700 border border-sky-200">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {/* Display loading ellipsis or task count */}
                    {loading ? '...' : `${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}`}
                  </span>
                </div>
              </div>
              
              {/* Add New Task Button */}
              <Link
                to="/add" // Links to the route for adding a new task
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-300 to-rose-300 text-gray-800 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:from-orange-400 hover:to-rose-400 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Task
              </Link>
            </div>
          </div>
        </header>

        {/* Task Grid Section */}
        <main>
          {loading ? (
            // === LOADING STATE ===
            // Show skeleton loaders while tasks are being fetched
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TaskCardSkeleton />
              <TaskCardSkeleton />
              <TaskCardSkeleton />
            </div>
          ) : tasks.length > 0 ? (
            // === TASKS AVAILABLE STATE ===
            // Map over the tasks array and render a TaskItem for each one
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <TaskItem 
                  key={task.id} 
                  task={task}
                  onUpdate={onUpdateTask} // Pass update handler to TaskItem
                  onDelete={onDeleteTask} // Pass delete handler to TaskItem
                />
              ))}
            </div>
          ) : (
            // === EMPTY STATE ===
            // Show this message if loading is false and there are no tasks
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No tasks yet</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Start organizing your work by creating your first task
              </p>
              {/* Link to the add task page, same as the one in the header */}
              <Link
                to="/add"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-300 to-rose-300 text-gray-800 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:from-orange-400 hover:to-rose-400 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Your First Task
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default TaskDashboard;

