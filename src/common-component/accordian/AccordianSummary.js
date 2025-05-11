import React from "react";
import "./accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const AccordianSummary = ({ children, arrowIcon = faArrowDown }) => {
  return (
    <div className="container">
      <div>{children}</div>
      <div>{<FontAwesomeIcon icon={arrowIcon} />}</div>
    </div>
  );
};

export default AccordianSummary;
