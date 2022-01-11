import React, {useCallback, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PhoneNumber from 'awesome-phonenumber';
import {Header} from '../../components/Header';
import {CustomButtonWithBG} from '../../components/CustomButton';

import {styles} from './styles';

const index = () => {
  const [number, onChangeNumber] = useState('+88');
  const navigation = useNavigation();

  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const loginPress = useCallback(() => {
    const region = PhoneNumber(number).getRegionCode();
    let checkValid = new PhoneNumber(number, region);
    const condition = checkValid.isValid() && checkValid.isMobile();
    if (!condition) {
      alert('Phone number is invalid!');
    } else {
      console.log('press', condition);
    }
  }, [number]);

  return (
    <View style={styles.container}>
      <Header onPress={backButtonPress} />
      <Text style={styles.login}>Login</Text>
      <Text style={styles.phone}>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => onChangeNumber(val)}
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
