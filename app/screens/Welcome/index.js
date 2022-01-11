import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {styles} from './styles';

const index = () => {
  const onPress = useCallback(() => {
    console.log('presssssssss');
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Bolt</Text>
      <Image
        style={styles.welcomeLogo}
        source={require('../../assests/Images/welcome.png')}
      />
      <CustomButtonWithBG
        style={styles.button}
        buttonPress={onPress}
        title={'Login with phone'}
      />
      <TouchableOpacity style={styles.touchable} onPress={() => alert('1')}>
        <Text style={styles.shopWithUs}>Shop with us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
