import React from "react";

const AuthenticationPage = ({ IfComponent, ElseCondition }) => {
  const isAuthenticated = true;
  return () => {
    if (isAuthenticated) {
      const staticData = [
        { name: "JP", age: "25" },
        { name: "Jaiprakash", age: "29" },
      ];
      const state = ["up", "mp", "manipur", "delhi"];
      const props = { staticData, state };
      return <IfComponent {...props} />;
    } else {
      return <ElseCondition />;
    }
  };
};

export default AuthenticationPage;
