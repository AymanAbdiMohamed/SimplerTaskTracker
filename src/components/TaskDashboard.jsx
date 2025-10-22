import React from 'react';
import { Link } from 'react-router-dom';
import TaskItem from './TaskItem';

/**
 * TaskCardSkeleton - Loading skeleton for task cards
 */
const TaskCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="animate-pulse">
        <div className="flex justify-between mb-3">
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * TaskDashboard - Main dashboard displaying all tasks
 * @param {Array} tasks - Array of task objects from global state
 * @param {Boolean} loading - Loading state from App component
 * @param {Function} onUpdateTask - Function to update a task
 * @param {Function} onDeleteTask - Function to delete a task
 */
function TaskDashboard({ tasks, loading, onUpdateTask, onDeleteTask }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-rose-300 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Task Dashboard
                    </h1>
                  </div>
                </div>
                <p className="text-gray-600 text-base">
                  Manage and track your tasks efficiently
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-50 to-sky-100 text-sky-700 border border-sky-200">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {loading ? '...' : `${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}`}
                  </span>
                </div>
              </div>
              <Link
                to="/add"
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

        {/* Task Grid */}
        <main>
          {loading ? (
            // Loading skeletons
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TaskCardSkeleton />
              <TaskCardSkeleton />
              <TaskCardSkeleton />
            </div>
          ) : tasks.length > 0 ? (
            // Display tasks using TaskItem component
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <TaskItem 
                  key={task.id} 
                  task={task}
                  onUpdate={onUpdateTask}
                  onDelete={onDeleteTask}
                />
              ))}
            </div>
          ) : (
            // Empty state
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
