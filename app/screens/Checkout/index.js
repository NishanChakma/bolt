import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import CheckoutCard from '../../components/CheckoutCard';
import {Footer} from './CheckoutFooter';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const CheckOut = () => {
  const [checked, setChecked] = useState(true);
  const navigation = useNavigation();
  const checkOutStore = useSelector(state => state.CheckoutReducer.checkoutArr); //store

  //return homepage if you didn't click the checkout button within 20 seconds
  //it could be done using redux also. But i used this simplest way.
  useEffect(() => {
    const timer = setTimeout(() => checked && backButtonPress(), 20000);
    return () => clearTimeout(timer);
  });

  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(({item}) => {
    return <CheckoutCard item={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <Header onPress={backButtonPress} />
      <Text style={styles.checkOut}>Checkout</Text>
      <FlatList
        data={checkOutStore}
        renderItem={renderItem}
        keyExtractor={item => item.uniqId}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Footer setChecked={setChecked} />}
      />
    </View>
  );
};

export default CheckOut;
