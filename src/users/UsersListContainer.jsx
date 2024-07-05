import React from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';

class UsersListContainer extends React.Component {
  state = {
    currentPage: 0,
    itemsPerPage: 3
  };

  goPrev = () => {
    if (this.state.currentPage > 0) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  goNext = () => {
    if (
      this.state.currentPage <
      Math.ceil(this.props.usersList.length / this.state.itemsPerPage) - 1
    ) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  render() {
    const { usersList } = this.props;
    const { currentPage, itemsPerPage } = this.state;

    return (
      <UsersList
        users={usersList}
        goPrev={this.goPrev}
        goNext={this.goNext}
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
      />
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.users.usersList
});

export default connect(mapStateToProps)(UsersListContainer);
