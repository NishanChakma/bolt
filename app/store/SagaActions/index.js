import {takeEvery, takeLatest, take, put} from 'redux-saga/effects';
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
  STOP_GOBACK,
  STOP_GOBACK_SUCCESS,
} from '../ActionTypes';
import {select, delay} from 'redux-saga/effects';
import {ProductsArr, BestSell} from '../../screens/Home/ProductsArr';

// watchers
function* rootSaga() {
  yield take(REHYDRATE);
  yield takeEvery(LOGIN, loginAction);
  yield takeEvery(CHECKOUT, checkOutAction);
  yield takeEvery(VERIFY, verifyAction);
  yield takeEvery(LOGOUT, logoutAction);
  yield takeEvery(COUNTER, counterAction);
  yield takeEvery(DELETE_ITEM, deleteAction);
  yield takeLatest(STOP_GOBACK, componentCounterAction);
}

//workers
const discount = async totalAmount => {
  const discountPercent = 5;
  const discountCal = totalAmount - (totalAmount * discountPercent) / 100;
  return discountCal.toFixed(2);
};

const totalAmount = async checkOutArray => {
  const totalAmount = await checkOutArray.reduce((a, {price}) => a + price, 0);
  return totalAmount;
};

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
  const res = {
    type: CHECKOUT_SUCCESS,
    checkOutArray: [],
    totalAmount: 0,
    discount: 0,
  };
  yield put(payload);
  yield put(res);
  navigation.navigate('WelcomeScreen');
}

function* checkOutAction({navigation, item}) {
  const getItems = state => state.CheckoutReducer.checkoutArr;
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
  const getItems = state => state.CheckoutReducer.checkoutArr;
  const state = yield select(getItems);
  const mainArr = [...ProductsArr, ...BestSell];
  const filterArr = mainArr.filter(a => a.uniqId === item.id);
  let checkOutArray = [];
  if (state.length > 0) {
    const newArr = yield state.map(obj => {
      if (obj.uniqId === item.id) {
        if (item.param === 'plus') {
          return {
            ...obj,
            counter: obj.counter + 1,
            price: obj.price + filterArr[0].price,
          };
        } else {
          if (obj.counter > 1) {
            return {
              ...obj,
              counter: obj.counter - 1,
              price: obj.price - filterArr[0].price,
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
  const getItems = state => state.CheckoutReducer.checkoutArr;
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

function* componentCounterAction({param, navigation}) {
  yield param && delay(20000);
  param && navigation.navigate('DrawerNav');
  const payload = {
    type: STOP_GOBACK_SUCCESS,
    checked: param,
  };
  yield put(payload);
}

export default rootSaga;
