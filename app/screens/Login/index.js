import React, {useCallback, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {bindActionCreators} from 'redux';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {ActionCreators} from '../../store';
import PhoneNumber from 'awesome-phonenumber';
import {Header} from '../../components/Header';
import {CustomButtonWithBG} from '../../components/CustomButton';

import {styles} from './styles';

const index = () => {
  const [number, onChangeNumber] = useState('+8801516114206');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loginAction} = bindActionCreators(ActionCreators, dispatch);

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
      loginAction(navigation);
    }
  }, [number, loginAction]);

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
