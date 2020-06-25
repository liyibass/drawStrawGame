import React from "react";
import "./UserList.style.scss";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";

import UserListItem from "../UserListItem/UserListItem.component";

function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="UserList
"
    >
      {userList.map((user) => {
        return <UserListItem name={user.name} key={user.id} />;
      })}
    </div>
  );
}

export default UserList;
