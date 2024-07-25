const baseUrl = 'https://6613d8a753b0d5d80f6885e7.mockapi.io/api/v7/todo';

export const createTask = taskDate =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskDate)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const fetchTaskList = () =>
  fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });

