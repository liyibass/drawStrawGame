import React from "react";
import "./UserListItem.style.scss";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/user/user.action";

function UserListItem({ user }) {
  const dispatch = useDispatch();

  function deleteSelectedUser(selectedUser) {
    // console.log(selectedUser);

    dispatch(deleteUser(selectedUser));
  }

  return (
    <div className="UserListItem">
      <div className="UserListItem-icon">
        <i className="far fa-user-circle"></i>
      </div>
      <div className="UserListItem-name">{user.name}</div>
      <div
        onClick={() => deleteSelectedUser(user)}
        className="UserListItem-delete"
      >
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
}

export default UserListItem;
