import React, {useCallback, memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {hdp, wdp} from '../../styles/Dimensions';

const HomeCard = memo(({ProductsArr, header}) => {
  const renderItem = useCallback(({item: {id, imageUrl, price, title}}) => {
    return (
      <View style={styles.items} key={id}>
        <TouchableOpacity onPress={() => null}>
          <Image style={styles.img} source={imageUrl} />
        </TouchableOpacity>
        <Text style={styles.text}>${price}.00</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }, []);

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
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 6,
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
