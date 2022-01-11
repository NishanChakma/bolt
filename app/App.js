import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Routes from './routes';

//app default background color
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.globalContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer theme={MyTheme}>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  globalContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
