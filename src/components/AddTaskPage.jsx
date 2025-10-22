import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { addTask } from '../api/tasks';

/**
 * AddTaskPage - Form page for creating new tasks
 * @param {Function} onTaskAdded - Callback to update global state with new task
 */
function AddTaskPage({ onTaskAdded }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim()) {
      toast.error('Please enter a task title');
      return;
    }

    if (!description.trim()) {
      toast.error('Please enter a task description');
      return;
    }

    setIsSubmitting(true);

    try {
      // Call POST API
      const response = await addTask({
        title: title.trim(),
        description: description.trim(),
      });

      // Update global state immediately
      onTaskAdded(response.data);

      // Show success notification
      toast.success('Task added successfully!');

      // Reset form
      setTitle('');
      setDescription('');

      // Navigate back to dashboard after short delay
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Error adding task:', error);
      toast.error(error.response?.data || 'Failed to add task. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-rose-300 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Create New Task
            </h1>
          </div>
          <p className="text-gray-600 text-base ml-15">
            Add a new task to stay organized and productive
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
          {/* Title Field */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-bold text-gray-900 mb-2"
            >
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Complete project documentation"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition-all text-gray-900 placeholder-gray-400"
              disabled={isSubmitting}
              aria-required="true"
            />
          </div>

          {/* Description Field */}
          <div className="mb-8">
            <label
              htmlFor="description"
              className="block text-sm font-bold text-gray-900 mb-2"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide details about this task..."
              rows="6"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition-all resize-none text-gray-900 placeholder-gray-400"
              disabled={isSubmitting}
              aria-required="true"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-300 to-rose-300 text-gray-800 font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-xl hover:from-orange-400 hover:to-rose-400 transform hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding Task...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Add Task
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold py-3 px-8 rounded-xl hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskPage;
