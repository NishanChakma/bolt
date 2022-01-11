import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: 'red',
  },
});

export default index;
