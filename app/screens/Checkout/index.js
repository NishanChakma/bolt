import React, {useCallback} from 'react';
import {View, Text, FlatList, ScrollView, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/Header';
import CheckoutCard from '../../components/CheckoutCard';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {styles} from './styles';
import {ProductsArr} from '../Home/ProductsArr';

const CheckOut = () => {
  const navigation = useNavigation();
  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(({item}) => {
    return <CheckoutCard item={item} />;
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{flexGrow: 1}}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}>
        <View style={styles.container}>
          <Header onPress={backButtonPress} />
          <Text style={styles.checkOut}>Checkout</Text>
          <FlatList
            data={ProductsArr}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
          <Text style={styles.address}>
            Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9
          </Text>
          <View style={styles.hr} />
          <View style={styles.cardInfoContainer}>
            <Text style={styles.infoText}>SubTotal</Text>
            <Text style={styles.number}>$160.00</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.infoText}>Discount</Text>
            <Text style={styles.number}>5%</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.infoText}>Shipping</Text>
            <Text style={styles.number}>$10.00</Text>
          </View>
          <View style={styles.hr} />
          <View style={styles.cardInfoContainer}>
            <Text style={styles.infoText}>Total</Text>
            <Text style={styles.number}>$10.00</Text>
          </View>
          <CustomButtonWithBG
            style={styles.button}
            buttonPress={() => null}
            title={'Back to home'}
            width={'100%'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckOut;
