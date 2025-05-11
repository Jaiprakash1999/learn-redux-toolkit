import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetUsers = () => {
  const [users, setUsers] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [pagination, setPagination] = useState(1);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      // setPagination((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const getUsersData = useCallback(async () => {
    try {
      setIsUserLoading(true);
      const res = await axios.get(`https://randomuser.me/api`, {
        params: {
          results: 100,
        },
      });
      setUsers(res.data);
      // setUsers((prev) => ({ ...prev, ...res.data }));
    } catch (error) {
      console.error(error, "error");
    } finally {
      setIsUserLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  return {
    users,
    isUserLoading,
    setPagination,
    pagination,
  };
};

export default useGetUsers;
