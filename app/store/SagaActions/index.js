import {takeEvery, take, put} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';
import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../ActionTypes';

// watchers
function* rootSaga() {
  yield take(REHYDRATE);
  yield takeEvery(LOGIN, loginAction);
}
export default rootSaga;

//workers
function* loginAction({navigation}) {
  let status = true;
  yield put({type: LOGIN_SUCCESS, status});
  navigation.navigate('Verify');
}
