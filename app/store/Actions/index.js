import {LOGIN, CHECKOUT, VERIFY, LOGOUT} from '../ActionTypes';

export const loginAction = (navigation, otp) => {
  return {
    type: LOGIN,
    navigation: navigation,
    otp: otp,
  };
};

export const checkOutAction = (navigation, item) => {
  return {
    type: CHECKOUT,
    navigation: navigation,
    item: item,
  };
};

export const verifyAction = () => {
  return {
    type: VERIFY,
  };
};

export const LogOut = navigation => {
  return {
    type: LOGOUT,
    navigation: navigation,
  };
};
