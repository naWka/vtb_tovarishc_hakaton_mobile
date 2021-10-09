import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { observer } from 'mobx-react';
import Swiper from 'react-native-swiper';
import { Colors } from '../../styles';
import EgorBlueScreen from './components/EgorBlueScreen';
import EgorGreyScreen from './components/EgorGreyScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayLight,
  },
});

const Swipe = observer(() => (
  <View style={styles.container}>
    <Swiper horizontal={false} showsPagination={false}>
      <EgorBlueScreen />
      <EgorGreyScreen />
    </Swiper>
  </View>

));

export default Swipe;
