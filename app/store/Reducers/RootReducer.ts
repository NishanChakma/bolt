import {combineReducers} from 'redux';

//Import all reducers in here
import LoginReducer from './LoginReducers';
import CheckOutReducer from './CheckOutReducer';

export default combineReducers({
  LoginReducer,
  CheckOutReducer,
});
