import {LOGIN, LOGIN_SUCCESS} from '../ActionTypes';

const initialState = {
  loginStatus: false,
  VerifySuccess: false,
  otp: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginStatus: payload.loginStatus,
        otp: payload.otp,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
