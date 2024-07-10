import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as usersActions from './users.actions';

class SearchFeild extends React.PureComponent {
  state = {
    userName: ''
  };
  onChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);

  };
  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          onChange={this.onChange}
          value={this.state.userName}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

SearchFeild.propTypes = {
  fetchUserData: PropTypes.func.isRequired
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData
};

export default connect(null, mapDispatch)(SearchFeild);
