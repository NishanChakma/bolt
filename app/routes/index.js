import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome';
import Login from '../screens/Login';
import Verify from '../screens/Verify';
import Home from '../screens/Home';
import {Dimensions} from '../styles';
import {forSlide} from '../hooks/animation';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        cardStyleInterpolator: forSlide,
        gestureEnabled: true,
        gestureResponseDistance: {
          horizontal: Dimensions.screenHeight,
          vertical: Dimensions.screenWidth,
        },
      })}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
