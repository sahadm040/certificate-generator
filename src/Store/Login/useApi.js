import axios from "axios";
import { loginFail, loginRequest, loginSuccess } from "./action";

// const Navigate = useNavigate;

export const loginApi = (input) => {
  console.log(input);
  return async (dispatch) => {
    dispatch(loginRequest(input));

    const res = await axios.post(
      `https://api.fms.lohasteels.com/api/v1/account/login`,
      input
    );

    console.log(res.data);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data.response));
    } else {
      dispatch(loginFail(res.data));
    }
  };
};
