import React, {useCallback} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import {CustomButtonWithBG} from '../../components/CustomButton';

import {styles} from './styles';

const index = () => {
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();

  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const loginPress = useCallback(() => {
    alert('press');
  }, []);

  return (
    <View style={styles.container}>
      <Header onPress={backButtonPress} />
      <Text style={styles.login}>Login</Text>
      <Text style={styles.phone}>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="01*********"
        keyboardType="numeric"
      />
      <CustomButtonWithBG
        style={styles.button}
        buttonPress={loginPress}
        title={'Login'}
      />
    </View>
  );
};

export default index;
