import React from "react";
import "./UserList.style.scss";
import { useEffect } from "react";

import UserListItem from "../UserListItem/UserListItem.component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserListFromApi,
  addUser,
  setUserList,
} from "../../redux/user/user.action";

function UserList() {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserListFromApi());
  }, []);

  // useEffect(() => {
  //   dispatch(setUserList());
  // }, []);

  function addUserHandler() {
    console.log("addUser");
    let newUserName = prompt("輸入姓名", "王大錘");
    let newUser = { id: newUserName + userList.length, name: newUserName };

    dispatch(addUser(newUser));
  }

  return (
    <div
      className="UserList
"
    >
      <div className="UserList-Title">
        <h1>參與抽獎名單</h1>
        <button onClick={() => addUserHandler()}>新增名單</button>
      </div>
      <div className="UserList-List">
        {userList.length
          ? userList.map((user) => {
              return <UserListItem user={user} key={user.id} />;
            })
          : null}
      </div>
    </div>
  );
}

export default UserList;
