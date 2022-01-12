import React from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Categories from '../../components/Categories';
import HomeCard from '../../components/HomeCards';
import {ProductsArr, BestSell} from './ProductsArr';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.drawer}
          source={require('../../assests/Images/drawer.png')}
        />
      </TouchableOpacity>
      <Categories />
      <HomeCard ProductsArr={ProductsArr} header={'Featured'} />
      <HomeCard ProductsArr={BestSell} header={'Best Sell'} />
    </ScrollView>
  );
};

export default Home;
