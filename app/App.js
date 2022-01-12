import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Routes from './routes';
//import redux
import {Provider} from 'react-redux';
import {store, persistor} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

//app default background color
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

//nested scrolview warning will be prevent
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.globalContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={MyTheme}>
            <Routes />
          </NavigationContainer>
        </PersistGate>
      </Provider>
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
