import {LOGIN} from '../ActionTypes';

export const loginAction = (navigation, otp) => {
  return {
    type: LOGIN,
    navigation: navigation,
    otp: otp,
  };
};
