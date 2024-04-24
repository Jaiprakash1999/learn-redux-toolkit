import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseHover = () => {
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {showTooltip ? (
        <div
          style={{
            position: "absolute",
            minWidth: "200px",
            padding: "8px",
            background: "yellow",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            userSelect: "text",
            pointerEvents: "auto",
          }}
          onMouseOver={handleMouseHover}
          onMouseOut={handleMouseLeave}
        >
          {text}
        </div>
      ) : null}
      <div onMouseOver={handleMouseHover} onMouseOut={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
