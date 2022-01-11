import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from '../ActionTypes';

const initialState = {
  loginStatus: false,
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
        loginStatus: true,
        loading: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginStatus: false,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
