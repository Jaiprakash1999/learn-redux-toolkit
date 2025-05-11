import React from "react";

const NewPagination = ({
  pagination,
  setPagination,
  totalRecords,
  countPerPage,
  totalPages,
}) => {
  console.log(totalPages, "total pages");
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{totalRecords}</div>
      <div
        style={{
          display: "flex",
          width: "100px",
          justifyContent: "space-between",
        }}
      >
        <button
          disabled={pagination === 1}
          onClick={() => {
            setPagination((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        {pagination}
        <button
          disabled={totalPages === pagination}
          onClick={() => setPagination((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewPagination;
