import {takeEvery, take, put} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';
import {LOGIN, LOGIN_SUCCESS, CHECKOUT, CHECKOUT_SUCCESS} from '../ActionTypes';
import {select} from 'redux-saga/effects';

// watchers
function* rootSaga() {
  // yield take(REHYDRATE);
  yield takeEvery(LOGIN, loginAction);
  yield takeEvery(CHECKOUT, checkOutAction);
}

//workers
function* loginAction({navigation, otp}) {
  payload = {
    loginStatus: true,
    otp: otp,
  };
  yield put({type: LOGIN_SUCCESS, payload});
  navigation.navigate('Verify');
}

function* checkOutAction({navigation, item}) {
  const getItems = state => state.CheckOutReducer.checkoutArray;
  const state = yield select(getItems);
  console.log('5555555555555555555555555', item.id);
  let filter = state.filter(res => {
    if (item.id === res.id) {
      //do same id task
    } else {
      //push new item
    }
  });

  // payload = [];
  // yield put({type: CHECKOUT_SUCCESS, payload});
  // navigation.navigate('Checkout');
}

export default rootSaga;
