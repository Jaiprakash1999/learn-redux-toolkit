import React from "react";

const GridComponent = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        width: "100%",
        // placeItems: "center",
        gridTemplateColumns: "auto auto auto auto auto",
        // gridTemplateRows: "auto",
      }}
    >
      <div
        style={{
          border: "1px solid red",
          height: "100px",
          display: "grid",
          placeContent: "center",
          width: "100px",
        }}
      >
        j
      </div>
      <div
        style={{
          border: "1px solid green",
          height: "100px",
          display: "grid",
          placeContent: "center",
          width: "600px",
        }}
      >
        a
      </div>
      <div
        style={{
          border: "1px solid blue",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        i
      </div>
      <div
        style={{
          border: "1px solid yellow",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        p
      </div>
      <div
        style={{
          border: "1px solid pink",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        r
      </div>
      <div
        style={{
          border: "1px solid gold",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        a
      </div>
      <div
        style={{
          border: "1px solid brown",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        k
      </div>
      <div
        style={{
          border: "1px solid gray",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        a
      </div>
      <div
        style={{
          border: "1px solid black",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        s
      </div>
      <div
        style={{
          border: "1px solid red",
          display: "grid",
          placeContent: "center",
          height: "100px",
          width: "100px",
        }}
      >
        h
      </div>
    </div>
  );
};

export default GridComponent;
