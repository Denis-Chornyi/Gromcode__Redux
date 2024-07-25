import React from 'react';
import User from './User';
import Filter from '../Filter';
import { setFilterText } from './users.actions';
import { usersSelector, filterTextSelector } from './users.selector';
import { connect } from 'react-redux';

class UsersList extends React.Component {
  handleFilterChange = event => {
    this.props.setFilterText(event.target.value);
  };

  render() {
    const { users, filterText } = this.props;

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div className="users-list">
        <Filter
          filterText={filterText}
          count={filteredUsers.length}
          onChange={this.handleFilterChange}
        />
        <ul className="users">
          {filteredUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: usersSelector(state),
  filterText: filterTextSelector(state)
});

const mapDispatchToProps = {
  setFilterText
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
