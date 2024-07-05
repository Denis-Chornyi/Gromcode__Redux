import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = currentPage < totalPages - 1;

  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn" disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button onClick={goNext} className="btn" disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};

export default Pagination;
