import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  Image,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Categories from '../../components/Categories';
import HomeCard from '../../components/HomeCards';
import {ProductsArr, BestSell} from './ProductsArr';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreators} from '../../store';
import Loader from '../LoadingScreen';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {LogOut} = bindActionCreators(ActionCreators, dispatch);
  const store = useSelector(state => state.AuthReducer); //store

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Hold on!',
        store.verify ? 'Are you sure you want to LOGOUT?' : 'Go to Login',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'YES',
            onPress: () => LogOut(navigation),
          },
        ],
      );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  if (store.loading) {
    <Loader />;
  }

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
