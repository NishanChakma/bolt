import {LOGIN} from '../ActionTypes';

export const loginAction = navigation => {
  return {
    type: LOGIN,
    navigation: navigation,
  };
};
