import userTypes from "./user.types";

export const setUserList = (userList) => {
  return {
    type: userTypes.SET_USER_LIST,
    payload: userList,
  };
};

export const setWinner = (userList) => {
  return {
    type: userTypes.SET_WINNER,
  };
};

export const clearWinner = () => {
  return {
    type: userTypes.CLEAR_WINNER,
  };
};
