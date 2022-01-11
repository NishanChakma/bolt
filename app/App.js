import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //NOT React.StyleSheet
  container: {
    paddingTop: 500,
    color: '#fff',
    backgroundColor: '#fff',
  },
});

export default App;
