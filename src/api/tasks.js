import axios from 'axios';

// API base URL for json-server
const API_URL = 'http://localhost:3001/tasks';

/**
 * GET request - Fetch all tasks
 * @returns {Promise} Response with tasks array
 */
export async function fetchTasks() {
  const response = await axios.get(API_URL);
  return { data: response.data };
}

/**
 * POST request - Add a new task
 * @param {Object} taskData - Object with title and description
 * @returns {Promise} Response with created task
 */
export async function addTask(taskData) {
  if (!taskData.title || !taskData.description) {
    throw new Error('Title and description are required');
  }

  const response = await axios.post(API_URL, {
    title: taskData.title,
    description: taskData.description,
  });
  
  return { data: response.data };
}

/**
 * DELETE request - Delete a task
 * @param {number} id - Task ID
 * @returns {Promise} Response confirming deletion
 */
export async function deleteTask(id) {
  await axios.delete(`${API_URL}/${id}`);
  return { data: { message: 'Task deleted successfully' } };
}

/**
 * PUT request - Update a task
 * @param {number} id - Task ID
 * @param {Object} taskData - Updated task data
 * @returns {Promise} Response with updated task
 */
export async function updateTask(id, taskData) {
  const response = await axios.put(`${API_URL}/${id}`, taskData);
  return { data: response.data };
}
