import { all_user_success, login_success, user_deleted } from "./authType";

const initState = {
  token: "",
  userData: {},
  allUser:[],

};
export const authReducer = (state = initState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case login_success: {
      return {
        ...state,
        token: payload.token,
        userData: payload.userData,
      };
    }

    case all_user_success:
      return {
          ...state,
          allUser:payload.data
      }


    default:
      return state;
  }
};
