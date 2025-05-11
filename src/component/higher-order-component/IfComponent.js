import React, { useMemo, useState } from "react";
import Dashboard from "./Dashboard";

const IfComponent = ({ staticData: data }) => {
  // const { staticData: data } = props;
  const [count, setCount] = useState(0);
  const isUserPresent = useMemo(() => ({ name: "jp", age: 40 }), []);

  // const getData = useCallback(() => {
  //   return { name: "jp", age: 40 };

  // }, []);

  return (
    <div>
      Hi your count is: <h1> {count}</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {index + 1}. {item.name} {item.age}
          </div>
        );
      })}
      <button onClick={() => setCount((prev) => prev + 2)}>add count</button>
      if condition satisfied start your journey from here!
      <Dashboard getData={isUserPresent} />
    </div>
  );
};

export default IfComponent;
