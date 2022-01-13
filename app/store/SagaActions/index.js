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
} from '../ActionTypes';
import {select} from 'redux-saga/effects';

// watchers
function* rootSaga() {
  yield take(REHYDRATE);
  yield takeEvery(LOGIN, loginAction);
  yield takeEvery(CHECKOUT, checkOutAction);
  yield takeEvery(VERIFY, verifyAction);
  yield takeEvery(LOGOUT, logoutAction);
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
  //total amount calculation
  const totalAmout = checkOutArray.reduce((a, {price}) => a + price, 0);
  //discount
  const discountPercent = 5;
  const discountCal = totalAmout - (totalAmout * discountPercent) / 100;
  const discount = discountCal.toFixed(2);
  const setCheckoutStore = {
    type: CHECKOUT_SUCCESS,
    checkOutArray: checkOutArray,
    totalAmout: totalAmout,
    discount: discount,
  };
  yield put(setCheckoutStore);
  navigation.navigate('Checkout');
}

export default rootSaga;
