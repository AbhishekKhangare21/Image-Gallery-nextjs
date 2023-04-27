import React, { useState } from "react";

const Pagination = ({ page, setPage, totalImages }) => {
  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalImages.length / 20)
      setPage(selectedPage);
  };

  return (
    <div className="flex justify-center cursor-pointer mb-16">
      <span
        onClick={() => selectedPageHandler(page - 1)}
        id={page <= 1 ? "pagination__disabled" : ""}
      >
        prev
      </span>
      {[...Array(Math.ceil(totalImages.length / 20))].map((_, i) => (
        <span
          onClick={() => selectedPageHandler(i + 1)}
          id={page === i + 1 ? "pagination__selected" : ""}
        >
          {i + 1}
        </span>
      ))}
      <span
        onClick={() => selectedPageHandler(page + 1)}
        id={page >= totalImages.length / 20 ? "pagination__disabled" : ""}
      >
        next
      </span>
    </div>
  );
};

export default Pagination;
