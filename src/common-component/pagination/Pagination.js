// import React from "react";

// const Pagination = ({
//   currentPage = 1,
//   setCurrentPage = () => {},
//   totalRecords = 0,
//   countPerPage = 5,
// }) => {
//   const totalPages = Math.ceil(totalRecords / countPerPage);

//   const handlePrev = () => {
//     setCurrentPage((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     setCurrentPage((prev) => prev + 1);
//   };

//   console.log(currentPage, "curentpage");

//   return (
//     <div style={{ display: "flex", justifyContent: "flex-end" }}>
//       <button disabled={currentPage === 1} onClick={handlePrev}>
//         prev
//       </button>
//       <button style={{ border: "1px solid grey", padding: 2, margin: 2 }}>
//         1
//       </button>
//       <button style={{ border: "1px solid grey", padding: 2, margin: 2 }}>
//         2
//       </button>
//       <button style={{ border: "1px solid grey", padding: 2, margin: 2 }}>
//         3
//       </button>
//       <button style={{ border: "1px solid grey", padding: 2, margin: 2 }}>
//         4
//       </button>
//       <button style={{ border: "1px solid grey", padding: 2, margin: 2 }}>
//         5
//       </button>
//       <button disabled={totalPages === currentPage} onClick={handleNext}>
//         next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from "react";

const Pagination = ({
  currentPage = 1,
  setCurrentPage = () => {},
  totalRecords = 0,
  countPerPage = 5,
}) => {
  const totalPages = Math.ceil(totalRecords / countPerPage);

  const generatePageNumbers = () => {
    const pagesToShow = 5; // Number of pages to show in pagination
    const pages = [];
    let startPage = currentPage - Math.floor(pagesToShow / 2);
    startPage = Math.max(startPage, 1);
    let endPage = startPage + pagesToShow - 1;
    endPage = Math.min(endPage, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
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
