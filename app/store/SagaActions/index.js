import {takeEvery, take, put} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';
import {LOGIN, LOGIN_SUCCESS} from '../ActionTypes';

// watchers
function* rootSaga() {
  yield take(REHYDRATE);
  yield takeEvery(LOGIN, loginAction);
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

export default rootSaga;
