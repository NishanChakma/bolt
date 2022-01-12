import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Categories from '../../components/Categories';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.drawer}
          source={require('../../assests/Images/drawer.png')}
        />
      </TouchableOpacity>
      <Categories />
    </View>
  );
};

export default Home;
