import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome';
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
    </Stack.Navigator>
  );
};

export default Routes;
