import { createSelector } from 'reselect';

export const taskListDataSelector = state => state.tasks.tasksList;

export const sortedTaskListSelector = createSelector([taskListDataSelector], tasksList => {
  return tasksList.slice().sort((a, b) => a.done - b.done);
});
