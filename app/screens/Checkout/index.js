import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import CheckoutCard from '../../components/CheckoutCard';
import {Footer} from './CheckoutFooter';
import {useSelector} from 'react-redux';
import Loader from '../LoadingScreen';
import {styles} from './styles';

const CheckOut = () => {
  const navigation = useNavigation();
  const store = useSelector(state => state.CheckoutReducer); //store

  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(({item}) => {
    return <CheckoutCard item={item} />;
  }, []);

  if (store.loading) {
    <Loader />;
  }

  return (
    <View style={styles.container}>
      <Header onPress={backButtonPress} />
      <Text style={styles.checkOut}>Checkout</Text>
      <FlatList
        data={store.checkoutArr}
        renderItem={renderItem}
        keyExtractor={item => item.uniqId}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Footer />}
      />
    </View>
  );
};

export default CheckOut;
