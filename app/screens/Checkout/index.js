import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import CheckoutCard from '../../components/CheckoutCard';
import {Footer} from './CheckoutFooter';
import {styles} from './styles';
import {ProductsArr} from '../Home/ProductsArr';

const CheckOut = () => {
  const [checked, setChecked] = useState(true);
  const navigation = useNavigation();

  //return homepage if you didn't click the checkout button within 20 seconds
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
        data={ProductsArr}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Footer setChecked={setChecked} />}
      />
    </View>
  );
};

export default CheckOut;
