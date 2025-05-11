import React from "react";

const Pagination = ({
  currentPage = 1,
  setCurrentPage = () => {},
  totalRecords = 0,
  countPerPage = 5,
}) => {
  const totalPages = Math.ceil(totalRecords / countPerPage);

  // const generatePageNumbers1 = () => {
  //   const pagesToShow = 5; // Number of pages to show in pagination
  //   const pages = [];
  //   let startPage = currentPage - Math.floor(pagesToShow / 2);
  //   startPage = Math.max(startPage, 1);
  //   let endPage = startPage + pagesToShow - 1;
  //   endPage = Math.min(endPage, totalPages);

  //   for (let i = startPage; i <= endPage; i++) {
  //     pages.push(i);
  //   }

  //   return pages;
  // };

  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // If total pages are 5 or less, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        // If current page is near the beginning
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // If current page is near the end
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // If current page is somewhere in the middle
        pages.push(1);
        if (currentPage > 4) {
          pages.push("...");
        }
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        if (totalPages - currentPage > 2) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  console.log(currentPage, "current Page");

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button disabled={currentPage === 1} onClick={handlePrev}>
        Prev
      </button>
      {generatePageNumbers().map((page) => (
        <button
          key={page}
          style={{
            border: "1px solid grey",
            padding: 2,
            margin: 2,
            fontWeight: currentPage === page ? "bold" : "normal",
          }}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
