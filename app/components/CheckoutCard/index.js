import React, {memo} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {MinusIcon, PlusIcon} from '../../assests/svg';

const CheckoutCard = memo(
  ({item: {id, imageUrl, price, company, title, counter}}) => {
    return (
      <View style={styles.container} key={id}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={imageUrl} />
        </View>
        <View style={styles.deatilsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.price}>${price}.00</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.touch} onPress={() => alert('ok')}>
              <MinusIcon />
            </TouchableOpacity>
            <Text style={styles.number}>{counter}</Text>
            <TouchableOpacity style={styles.touch} onPress={() => alert('ok')}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.crossButton}
          onPress={() => alert('ok')}>
          <Image
            style={styles.cross}
            source={require('../../assests/Images/cross.png')}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

export default CheckoutCard;
