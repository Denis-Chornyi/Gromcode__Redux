import React from 'react';
import Pagination from './Pagination';

const UsersList = ({ users, goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const startIndex = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul className="users">
        {usersToDisplay.map(user => (
          <li key={user.id} className="user">
            <span className="user__name">{user.name}</span>
            <span className="user__age">{user.age}</span>
          </li>
        ))}
      </ul>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default UsersList;