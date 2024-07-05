import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage) - 1;
  return (
    <div className="pagination">
      {
        <button onClick={goPrev} className="btn">
          {isPrevPageAvailable && '←'}
        </button>
      }
      <span className="pagination__page">{currentPage + 1}</span>
      {
        <button onClick={goNext} className="btn">
          {isNextPageAvailable && '→'}
        </button>
      }
    </div>
  );
};

export default Pagination;
