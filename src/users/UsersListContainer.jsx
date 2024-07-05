import React from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import { setPage } from './users.actions';

class UsersListContainer extends React.Component {
  goPrev = () => {
    if (this.props.currentPage > 0) {
      this.props.setPage(this.props.currentPage - 1);
    }
  };

  goNext = () => {
    if (this.props.currentPage < Math.ceil(this.props.usersList.length / this.props.itemsPerPage) - 1) {
      this.props.setPage(this.props.currentPage + 1);
    }
  };

  render() {
    const { usersList, currentPage, itemsPerPage } = this.props;

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
  usersList: state.users.usersList,
  currentPage: state.users.currentPage,
  itemsPerPage: 3
});

const mapDispatchToProps = {
  setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);