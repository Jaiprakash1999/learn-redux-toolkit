import React, { useEffect, useRef, useState } from "react";
const OPTIONS = [
  { id: 1, label: "Male", value: "M" },
  { id: 2, label: "Female", value: "F" },
  { id: 3, label: "Others", value: "O" },
];

const Select = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option) => {
    // onChange(option);
    setSelectedItem(option.label);
    console.log(option, "option");
  };

  const dropDownRef = useRef(null);

  const handleClickOutSide = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isOpen]);

  return (
    <div style={{ position: "relative" }} ref={dropDownRef}>
      <div>
        <input
          readOnly
          value={selectedItem}
          onClick={() => setIsOpen((prev) => !prev)}
          placeholder="SELECT AN OPTION .."
        />
        {isOpen ? (
          <div
            style={{ position: "absolute", background: "pink", width: "100%" }}
          >
            {OPTIONS.map((option) => {
              return (
                <div
                  key={option.id}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    borderBottom: "1px solid red",
                  }}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Select;
