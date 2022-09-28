import * as React from 'react';
import Home from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const Drawer = createDrawerNavigator();

const LogOut = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const verify = useSelector(state => state.AuthReducer.verify); //store
  const {LogOut} = bindActionCreators(ActionCreators, dispatch);
  useEffect(() => {
    if (verify) {
      LogOut(navigation);
    } else {
      navigation.navigate('Login');
    }
  }, [verify]);
  return null;
};

function DrawerNav() {
  const checkVerify = useSelector(state => state.AuthReducer.verify); //store
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      {checkVerify && (
        <Drawer.Screen
          name="Logout"
          component={LogOut}
          options={{headerShown: false}}
        />
      )}
    </Drawer.Navigator>
  );
}

export default DrawerNav;
