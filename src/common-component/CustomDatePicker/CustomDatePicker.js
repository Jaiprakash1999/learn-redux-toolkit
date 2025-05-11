// CustomDatePicker.js
import React, { useState } from "react";
import "./CustomDatePicker.css";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const totalDays = daysInMonth(year, month);
    console.log(totalDays, "totalDays");
    const monthData = [];

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push(null);
        } else if (day > totalDays) {
          break;
        } else {
          week.push(day);
          day++;
        }
      }
      monthData.push(week);
    }
    console.log(monthData, "monthData");
    return monthData;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  };

  console.log(new Date().getDate(), "getDate");
  console.log(new Date(2024, 5, 0).getDate(), "getDate with some props");

  const renderCalendar = () => {
    const monthData = getMonthData(
      currentMonth.getFullYear(),
      currentMonth.getMonth()
    );

    return monthData.map((week, index) => (
      <div key={index} className="week">
        {week.map((day, index) => (
          <div
            key={index}
            className={`day ${day ? "" : "empty"} ${
              selectedDate && day === selectedDate.getDate() ? "selected" : ""
            }`}
            onClick={() => day && handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    ));
  };

  console.log(selectedDate, "selected date");
  console.log(currentMonth, "current Month");

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&#8249;</button>
        <div className="month">
          {currentMonth.toLocaleString("default", { month: "long" })}
          {currentMonth.getFullYear()}
        </div>
        <button onClick={handleNextMonth}>&#8250;</button>
      </div>
      <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
      </div>
      {renderCalendar()}
    </div>
  );
};

export default CustomDatePicker;
