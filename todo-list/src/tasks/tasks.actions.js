import * as taskGateway from './taskGateway';
import { taskListDataSelector } from './tasks.selectors';

export const TASK_LIST_RECEIVED = 'TASK_LIST_RECEIVED';

export const tasksListReceived = tasksList => ({
  type: TASK_LIST_RECEIVED,
  payload: tasksList
});

export const getTaskList = () => {
  return dispatch => {
    taskGateway.fetchTaskList().then(tasksList => dispatch(tasksListReceived(tasksList)));
  };
};

export const updateTask = id => {
  return (dispatch, getState) => {
    const state = getState();
    const tasksList = taskListDataSelector(state);
    const task = tasksList.find(task => task.id === id);
    const updatedTask = {
      ...task,
      done: !task.done,
      
    };
    taskGateway.updateTask(id, updatedTask).then(() => dispatch(getTaskList()));
  };
};

export const deleteTask = id => {
  return dispatch => {
    taskGateway.deleteTask(id).then(() => dispatch(getTaskList()));
  };
};

export const createTask = text => {
  return dispatch => {
    const newTask = {
      text,
      done: false,
      createdAt: new Date().toISOString()
    };
    taskGateway.createTask(newTask).then(() => dispatch(getTaskList()));
  };
};
