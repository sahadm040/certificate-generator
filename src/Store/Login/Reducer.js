import { LGOIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initiailState = {
  loding: false,
  error: "",
  userDetails: [],
};

const LoginReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loding: false,
        userDetails: action.payload,
      };
    case LGOIN_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
