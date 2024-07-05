import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Pagination from './Pagination';
import { setPage } from './users.actions';

const UsersList = ({ users, currentPage, itemsPerPage, setPage }) => {
  const startIndex = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(startIndex, startIndex + itemsPerPage);

  const goPrev = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1);
    }
  };

  const goNext = () => {
    if (currentPage < Math.ceil(users.length / itemsPerPage) - 1) {
      setPage(currentPage + 1);
    }
  };

  return (
    <div>
      <ul className="users">
        {usersToDisplay.map(user => (
          <Users key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
  itemsPerPage: 3
});

const mapDispatchToProps = {
  setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
