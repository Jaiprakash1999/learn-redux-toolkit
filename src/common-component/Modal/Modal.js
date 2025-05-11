// import React, { useEffect, useRef } from "react";

const Modal = ({ children, onClose, showModal }) => {
  //if user want to close modal on outside click
  // const modalRef = useRef(null);
  // const handleClickOutside = (event) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target)) {
  //     onClose();
  //   }
  // };

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     handleClickOutside(event);
  //   };

  //   if (showModal) {
  //     document.addEventListener("mousedown", handleClick);
  //   } else {
  //     document.removeEventListener("mousedown", handleClick);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, [showModal]);

  //if user do not want to close the modal on outside click

  // useEffect(() => {
  //   if (showModal) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [showModal]);

  if (!showModal) return null;

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "100000",
      }}
    >
      <div
        // ref={modalRef} // if user want to close the modal on outer click
        style={{
          position: "relative",
          width: "50%",
          height: "50%",
          overflow: "auto",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            border: "none",
            background: "none",
            padding: "0",
            fontSize: "20px",
          }}
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
