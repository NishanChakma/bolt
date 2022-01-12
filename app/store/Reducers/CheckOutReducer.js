import {CHECKOUT, CHECKOUT_SUCCESS} from '../ActionTypes';

const initialState = {
  checkoutArray: [],
};

const CheckOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT:
      return {
        ...state,
        loading: true,
      };
    case CHECKOUT_SUCCESS: {
      return {
        ...state,
        // checkoutArray: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default CheckOutReducer;
