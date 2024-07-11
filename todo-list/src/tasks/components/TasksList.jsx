import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import PropTypes from 'prop-types';
import * as tasksActions from '../tasks.actions';
import { connect } from 'react-redux';
import { sortedTaskListSelector } from '../tasks.selectors';

class TasksList extends React.PureComponent {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.props.deleteTask}
              onChange={this.props.updateTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask
};

const mapState = state => ({
  tasks: sortedTaskListSelector(state),
  
});

export default connect(mapState, mapDispatch)(TasksList);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired
};
