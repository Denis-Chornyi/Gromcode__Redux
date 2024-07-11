import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends React.PureComponent {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          className="create-task__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn create-task__btn" onClick={this.handleTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

CreateTaskInput.propTypes = {
  value: PropTypes.string
};

CreateTaskInput.defaultProps = {
  value: ''
};
