import React from 'react';
import { connect } from 'react-redux';
import User from './User';
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
    const totalPages = Math.ceil(users.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
      setPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
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
