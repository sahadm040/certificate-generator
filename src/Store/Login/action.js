import { LOGIN_REQUEST } from "./actionType";

export const loginRequest = (input) =>
  // console.log(input),
  ({
    type: LOGIN_REQUEST,
    payload: input,
  });

export const loginSuccess = (userDetails) => ({
  type: LOGIN_REQUEST,
  payload: userDetails,
});

export const loginFail = (error) => ({
  type: LOGIN_REQUEST,
  payload: error,
});
