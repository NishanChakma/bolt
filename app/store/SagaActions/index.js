import {takeEvery, take, put} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';
import {
  LOGIN,
  LOGIN_SUCCESS,
  CHECKOUT,
  CHECKOUT_SUCCESS,
  VERIFY,
  VERIFY_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  COUNTER,
  DELETE_ITEM,
} from '../ActionTypes';
import {select} from 'redux-saga/effects';

// watchers
function* rootSaga() {
  yield take(REHYDRATE);
  yield takeEvery(LOGIN, loginAction);
  yield takeEvery(CHECKOUT, checkOutAction);
  yield takeEvery(VERIFY, verifyAction);
  yield takeEvery(LOGOUT, logoutAction);
  yield takeEvery(COUNTER, counterAction);
  yield takeEvery(DELETE_ITEM, deleteAction);
}

//workers
function* loginAction({navigation, otp}) {
  const payload = {
    type: LOGIN_SUCCESS,
    loginStatus: true,
    otp: otp,
  };
  yield put(payload);
  navigation.navigate('Verify');
}

function* verifyAction() {
  const payload = {
    type: VERIFY_SUCCESS,
    verify: true,
  };
  yield put(payload);
}

function* logoutAction({navigation}) {
  const payload = {
    type: LOGOUT_SUCCESS,
    verify: false,
    loginStatus: false,
  };
  yield put(payload);
  navigation.navigate('WelcomeScreen');
}

function* checkOutAction({navigation, item}) {
  const getItems = state => state.MyReducer.checkoutArr;
  const state = yield select(getItems);
  let checkOutArray = [];
  if (state.length > 0) {
    const objIndex = state.findIndex(obj => obj.uniqId === item.uniqId);
    if (objIndex !== -1) {
      //item update
      const newArr = yield state.map(obj => {
        if (obj.uniqId === item.uniqId) {
          return {
            ...obj,
            counter: obj.counter + 1,
            price: obj.price + item.price,
          };
        }
        return obj;
      });
      checkOutArray = newArr;
    } else {
      checkOutArray = [...state, item]; //new item addition with existing item
    }
  } else {
    checkOutArray.push(item); //new item
  }
  const tAmount = yield totalAmount(checkOutArray);
  const tDiscount = yield discount(tAmount);
  const setCheckoutStore = {
    type: CHECKOUT_SUCCESS,
    checkOutArray: checkOutArray,
    totalAmount: tAmount,
    discount: tDiscount,
  };
  yield put(setCheckoutStore);
  navigation.navigate('Checkout');
}

function* counterAction(item) {
  const getItems = state => state.MyReducer.checkoutArr;
  const state = yield select(getItems);
  let checkOutArray = [];
  if (state.length > 0) {
    const newArr = yield state.map(obj => {
      if (obj.uniqId === item.id) {
        if (item.param === 'plus') {
          return {
            ...obj,
            counter: obj.counter + 1,
            price: obj.price + item.price,
          };
        } else {
          if (obj.counter > 1) {
            return {
              ...obj,
              counter: obj.counter - 1,
              price: obj.price - item.price,
            };
          }
        }
      }
      return obj;
    });
    checkOutArray = newArr;
  }
  const tAmount = yield totalAmount(checkOutArray);
  const tDiscount = yield discount(tAmount);
  const setCheckoutStore = {
    type: CHECKOUT_SUCCESS,
    checkOutArray: checkOutArray,
    totalAmount: tAmount,
    discount: tDiscount,
  };
  yield put(setCheckoutStore);
}

function* deleteAction(item) {
  const getItems = state => state.MyReducer.checkoutArr;
  const state = yield select(getItems);
  const checkOutArray = state.filter(res => res.uniqId !== item.id);
  const tAmount = yield totalAmount(checkOutArray);
  const tDiscount = yield discount(tAmount);
  const setCheckoutStore = {
    type: CHECKOUT_SUCCESS,
    checkOutArray: checkOutArray,
    totalAmount: tAmount,
    discount: tDiscount,
  };
  yield put(setCheckoutStore);
}
const discount = async totalAmount => {
  const discountPercent = 5;
  const discountCal = totalAmount - (totalAmount * discountPercent) / 100;
  return discountCal.toFixed(2);
};

const totalAmount = async checkOutArray => {
  const totalAmount = await checkOutArray.reduce((a, {price}) => a + price, 0);
  return totalAmount;
};
export default rootSaga;
