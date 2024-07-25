import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination';
import { goNext, goPrev } from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

const UsersList = ({ users, currentPage, itemsPerPage, goNext, goPrev }) => {
  const startIndex = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 0) {
      goPrev();
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(users.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
      goNext();
    }
  };

  return (
    <div>
      <Pagination
        goPrev={handlePrevClick}
        goNext={handleNextClick}
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
  users: usersListSelector(state),
  currentPage: currentPageSelector(state),
  itemsPerPage: 3
});

const mapDispatchToProps = {
  goNext,
  goPrev
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
