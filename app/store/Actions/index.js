import {LOGIN, CHECKOUT} from '../ActionTypes';

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
