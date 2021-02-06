import React from "react";
import { useQuery } from "@apollo/react-hooks";
import UserList from "../UserList";
import { QUERY_USERS } from "../../utils/queries";

export function UserList([users]) {
  const { loading, data: username } = useQuery(QUERY_USERS)

  function filterUsers() {
    return userName?.users.filter(
      (user) => user.username
    );
  };

  return (
    <div className="my-2">
      {!loading ? (
        <div >
          {filterUsers().map((users) => (
            <User
              key={users._id}
              _id={users._id}
              username={users.username}

            />
          ))}
        </div>
      ) : (
          <h3>No users found!</h3>
        )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
};