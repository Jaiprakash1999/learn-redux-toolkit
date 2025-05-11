import React, { useState } from "react";
import useGetUsers from "../../hooks/useGetUsers";
// import AccordianSummary from "./AccordianSummary";
// import AccordianContent from "./AccordianContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import NewPagination from "../new-pagination/NewPagination";

const Accordian = () => {
  const [isAccordian, setIsAccordian] = useState([]);
  const {
    users = {},
    isUserLoading,
    setPagination,
    pagination,
  } = useGetUsers();
  const { results = [] } = users || {};
  const countPerPage = 10;

  const usersd = Array.from({ length: 100 }, (_, i) => `User ${i + 1}`);

  console.log(usersd, "usersda");

  const startIndex = (pagination - 1) * countPerPage;
  const lastIndex = startIndex + countPerPage;

  const currentData = results.slice(startIndex, lastIndex);

  // const [data, setData] = useState(5);

  const handlePagination = () => {};

  const handleMultipleAccordian = async (id) => {
    const newIsAccordian = [...isAccordian];
    if (newIsAccordian.includes(id)) {
      const filterId = newIsAccordian.filter(
        (accordianId) => accordianId !== id
      );
      setIsAccordian(filterId);
    } else {
      const filterId = [...isAccordian, id];
      setIsAccordian(filterId);
    }
  };

  const handleSingleAccordian = (id) => {
    if (isAccordian.includes(id)) {
      setIsAccordian([]);
    } else {
      setIsAccordian(id);
    }
  };

  console.log(isAccordian, "isid");

  return (
    <div
      style={{
        border: "1px solid red",
        // padding: "12px",
        margin: "20px",
      }}
    >
      {isUserLoading
        ? "Loading..."
        : currentData.map((user) => {
            const {
              name,
              login = {},
              picture = {},
              gender,
              registered,
              dob,
            } = user || {};
            const { age } = dob || {};
            const { date } = registered || {};
            const { medium } = picture || {};
            const { uuid, username, password } = login || {};
            const { first, last, title } = name || {};

            return (
              <div key={uuid} style={{ borderBottom: "1px solid gray" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px",
                  }}
                > 
                  <img
                    src={medium}
                    alt="mediumphoto"
                    style={{
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ display: "flex", width: "30%", gap: 12 }}>
                    <div> {title}</div>
                    <div> {first}</div>
                    <div>{last}</div>
                  </div>
                  <div style={{ width: "10%" }}>
                    {gender[0].toUpperCase() + gender.substring(1)}
                  </div>
                  <div>{age}</div>
                  <button
                    onClick={() => handleSingleAccordian(uuid)}
                    style={{ background: "white", border: "none" }}
                  >
                    <FontAwesomeIcon
                      icon={
                        isAccordian.includes(uuid) ? faAngleUp : faAngleDown
                      }
                    />
                  </button>
                </div>
                {isAccordian.includes(uuid) ? (
                  <div
                    style={{
                      padding: "12px",
                      display: "flex",
                      gap: "12",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Country : {user.location.country}</div>
                    <div>Username : {username}</div>
                    <div>Password : {password}</div>
                    <div>
                      Registered At :
                      {date.toLocaleString({
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                        timeZone: "Asia/Kolkata",
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

      <div style={{ margin: "12px" }}>
        <NewPagination
          totalRecords={results.length}
          pagination={pagination}
          setPagination={setPagination}
          countPerPage={countPerPage}
        />
      </div>
    </div>
  );
};

export default Accordian;
