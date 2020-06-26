import React from "react";
import "./UserList.style.scss";
import { useEffect } from "react";

import UserListItem from "../UserListItem/UserListItem.component";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserListFromApi } from "../../redux/user/user.action";

function UserList() {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserListFromApi());
  }, []);

  return (
    <div
      className="UserList
"
    >
      <h1>參與抽獎名單</h1>
      <div className="UserList-List">
        {userList.length
          ? userList.map((user) => {
              return <UserListItem name={user.name} key={user.id} />;
            })
          : null}
      </div>
    </div>
  );
}

export default UserList;
