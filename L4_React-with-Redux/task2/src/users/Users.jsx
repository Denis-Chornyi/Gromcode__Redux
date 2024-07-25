import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class Users extends PureComponent {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User #${id}`
    };
    this.props.createUser(newUser);
  };

  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className="users">
        <button onClick={this.onUserCreate} className="users__create-btn">
          Create User
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className="users__list-item">
              {user.name}
              <button onClick={() => deleteUser(user.id)} className="users__delete-btn">
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.usersList
  };
};

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser
};

export default connect(mapState, mapDispatch)(Users);
