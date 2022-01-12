import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {styles} from '../Login/styles';

const index = () => {
  const [number, onChangeNumber] = useState('');
  const navigation = useNavigation();

  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const VerifyPress = useCallback(() => {
    alert('Phone number is invalid!', number);
  }, [number]);

  return (
    <View style={styles.container}>
      <Header onPress={backButtonPress} />
      <Text style={styles.login}>Verify</Text>
      <Text style={styles.phone}>OTP</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => onChangeNumber(val)}
        value={number}
        placeholder="Enter OTP"
      />
      <CustomButtonWithBG
        style={styles.button}
        buttonPress={VerifyPress}
        title={'Verify'}
      />
    </View>
  );
};

export default index;
