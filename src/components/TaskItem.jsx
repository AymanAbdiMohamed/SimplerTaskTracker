import React, { useState } from 'react';
import toast from 'react-hot-toast';

/**
 * TaskItem - Displays a single task with title, description, and action buttons
 * @param {Object} task - Task object containing id, title, and description
 * @param {Function} onDelete - Callback to delete the task
 * @param {Function} onUpdate - Callback to update the task
 */
function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    setIsDeleting(true);
    try {
      await onDelete(task.id);
      toast.success('Task deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete task');
      setIsDeleting(false);
    }
  };

  const handleSave = async () => {
    if (!editTitle.trim() || !editDescription.trim()) {
      toast.error('Title and description cannot be empty');
      return;
    }

    setIsSaving(true);
    try {
      await onUpdate(task.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
      });
      toast.success('Task updated successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update task');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-sky-400 transition-all duration-300">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Task Title
          </label>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition-all text-gray-900"
            disabled={isSaving}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Description
          </label>
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            rows="3"
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition-all resize-none text-gray-900"
            disabled={isSaving}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex-1 bg-gradient-to-r from-green-300 to-green-400 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSaving ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save
              </>
            )}
          </button>
          <button
            onClick={handleCancel}
            disabled={isSaving}
            className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group ${isDeleting ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-400 transition-colors flex-1">
          {task.title}
        </h3>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold ml-2">
          #{task.id}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {task.description}
      </p>
      <div className="flex gap-2 pt-3 border-t border-gray-100">
        <button
          onClick={() => setIsEditing(true)}
          disabled={isDeleting}
          className="flex-1 flex items-center justify-center gap-2 bg-sky-50 text-sky-600 font-semibold py-2 px-4 rounded-lg hover:bg-sky-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDeleting ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Deleting...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
