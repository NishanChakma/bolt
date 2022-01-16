import {
  CHECKOUT,
  CHECKOUT_SUCCESS,
  COUNTER,
  DELETE_ITEM,
  STOP_GOBACK,
  STOP_GOBACK_SUCCESS,
} from '../ActionTypes';

const initialState = {
  loginStatus: false,
  checkoutArr: [],
  counterCheck: false,
  checked: true,
};

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case CHECKOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        checkoutArr: action.checkOutArray,
        totalAmount: action.totalAmount,
        discount: action.discount,
      };
    }

    case COUNTER: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        loading: true,
      };
    }
    case STOP_GOBACK: {
      return {
        ...state,
        loading: true,
      };
    }
    case STOP_GOBACK_SUCCESS: {
      return {
        ...state,
        checked: action.checked,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default CheckoutReducer;
