import React, {useCallback, memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreators} from '../../store';
import {bindActionCreators} from 'redux';
import {hdp, wdp} from '../../styles/Dimensions';

const HomeCard = memo(({ProductsArr, header}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {checkOutAction, stopGobackAction} = bindActionCreators(
    ActionCreators,
    dispatch,
  );
  const store = useSelector(state => state.AuthReducer); //store
  // console.log('Verify++++++++++++ : ', store.verify);
  const onPressHandle = useCallback(
    id => {
      // console.log('Verify :----------- ', store.verify);
      if (store.verify == false) {
        navigation.navigate('Login');
      } else {
        stopGobackAction(true, navigation);
        checkOutAction(navigation, ProductsArr[id]);
      }
    },
    [store, ProductsArr],
  );

  const renderItem = useCallback(
    ({item: {id, imageUrl, price, title, uniqId}}) => {
      return (
        <View style={styles.items} key={uniqId}>
          <TouchableOpacity onPress={() => onPressHandle(id)}>
            <Image style={styles.img} source={imageUrl} />
          </TouchableOpacity>
          <Text style={styles.text}>${price}.00</Text>
          <Text style={styles.text}>{title}</Text>
        </View>
      );
    },
    [store, ProductsArr],
  );

  return (
    <View>
      <Text style={styles.categories}>{header}</Text>
      <FlatList
        data={ProductsArr}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  categories: {
    fontSize: hdp(22),
    color: '#434343',
    marginTop: hdp(10),
  },
  items: {
    marginRight: wdp(10),
    marginVertical: hdp(10),
  },
  img: {
    height: hdp(180),
    width: wdp(150),
    borderRadius: hdp(6),
    marginBottom: hdp(10),
  },
  text: {
    color: '#000',
    fontSize: hdp(14),
  },
});

export default HomeCard;
