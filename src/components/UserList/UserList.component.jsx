import React from "react";
import "./UserList.style.scss";
import { useEffect } from "react";

import UserListItem from "../UserListItem/UserListItem.component";
import { useSelector, useDispatch } from "react-redux";
import { setUserList } from "../../redux/user/user.action";
import Axios from "axios";

function UserList() {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(setUserList(response.data));
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
      <h1>參與抽獎名單</h1>
      <div className="UserList-List">
        {userList.map((user) => {
          return <UserListItem name={user.name} key={user.id} />;
        })}
      </div>
    </div>
  );
}

export default UserList;
