import React, {useCallback, useState} from 'react';
import {View, Text, TextInput, Platform, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreators} from '../../store';
import {styles} from '../Login/styles';

const index = () => {
  const [number, onChangeNumber] = useState('');
  const navigation = useNavigation();
  const store = useSelector(state => state.MyReducer); //store
  const dispatch = useDispatch();
  const {verifyAction} = bindActionCreators(ActionCreators, dispatch);

  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const VerifyPress = useCallback(() => {
    if (number === store.otp) {
      Platform.OS === 'ios'
        ? alert('Congrats!')
        : ToastAndroid.show('Congrats!', ToastAndroid.SHORT);
      verifyAction();
      navigation.navigate('DrawerNav');
    } else {
      Platform.OS === 'ios'
        ? alert('The OTP entered is incorrect!')
        : ToastAndroid.show(
            'The OTP entered is incorrect!',
            ToastAndroid.SHORT,
          );
    }
  }, [number, store]);

  return (
    <View style={styles.container}>
      <Header onPress={backButtonPress} />
      <Text style={styles.login}>Verify</Text>
      <Text style={styles.phone}>OTP</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => onChangeNumber(val)}
        value={number}
        placeholder="Enter or paste your OTP"
        keyboardType="numeric"
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
