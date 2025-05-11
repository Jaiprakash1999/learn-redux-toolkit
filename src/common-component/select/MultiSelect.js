import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const MultiSelect = ({
  placeholder = "Select an option",
  onSelect = () => {},
  readOnly = false,
  width = "w-full",
  options = [],
  required = true,
  labelKey = "",
  valueKey = "",
  defaultOption = {},
  className = "",
  disabled = false,
  showIcon = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dropDownRef = useRef(null);

  const formatedOptions = options.map((option) => ({
    label: option[labelKey],
    value: option[valueKey],
  }));

  const [filteredOptions, setFilteredOptions] = useState(formatedOptions);

  const handleOptionClick = (option) => {
    setInputValue(option?.label);
    onSelect(option);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setFilteredOptions(formatedOptions);
    setInputValue(defaultOption?.label || "");
    onSelect(defaultOption);
    // eslint-disable-next-line
  }, [options]);

  useEffect(() => {
    if (!readOnly) {
      const filtered = formatedOptions.filter((option) =>
        option?.label?.toLowerCase()?.includes(inputValue?.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
    // eslint-disable-next-line
  }, [inputValue, readOnly]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropDownRef}>
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <input
          type="text"
          readOnly={readOnly}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleInputChange}
          className={
            className === ""
              ? `border ${width} focus:border-[#1A56DB] text-sm text-gray-800 py-1.5 focus:outline-none rounded-lg placeholder:text-[#D1D5DB] px-2`
              : className
          }
        />
        {showIcon && (
          <div
            className={`px-2 absolute ${isOpen ? "top-2" : "top-1"} right-0`}
          >
            <FontAwesomeIcon icon={isOpen ? faSortUp : faSortDown} />
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className={`absolute ${width} max-h-60 overflow-y-auto bg-white border border-gray-300 z-50 rounded-md shadow-md`}
        >
          {filteredOptions?.length > 0 ? (
            filteredOptions.map((option) => {
              return (
                <div
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 border-b overflow-y-auto text-gray-600 last:border-none cursor-pointer hover:bg-blue-100 text-sm"
                >
                  {option.label}
                </div>
              );
            })
          ) : (
            <div className="flex justify-center p-2 text-red-600">
              Oops no results found !
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
