import React from 'react';

const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className='container mx-auto flex gap-2 mt-4 items-center justify-center'>
      <button
        className={`${currentPage === 1 ? 'opacity-20' : ''}`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {range(1, totalPages).map(page => (
        <button
          className={`${currentPage === page ? 'border-opacity-100 font-bold' : 'border-opacity-20'} px-4 py-2 border rounded border-gray-800`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`${currentPage === totalPages ? 'opacity-20' : ''}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default TablePagination;
