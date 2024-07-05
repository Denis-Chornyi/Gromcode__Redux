import React from 'react';
import Users from './Users';
import Pagination from './Pagination';

const UsersList = ({ users, goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const startIndex = currentPage * itemsPerPage;
  const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul className="users">
        {paginatedUsers.map(user => (
          <Users key={user.id} name={user.name} age={user.age} />
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
