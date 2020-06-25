import React from "react";
import "./UserListItem.style.scss";

function UserListItem({ name }) {
  return (
    <div className="UserListItem">
      <div className="UserListItem-icon">
        <i className="far fa-user-circle"></i>
      </div>
      <div className="UserListItem-name">{name}</div>
    </div>
  );
}

export default UserListItem;
