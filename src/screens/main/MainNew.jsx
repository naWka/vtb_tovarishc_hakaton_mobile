import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import Swiper from 'react-native-swiper';
import { Colors } from '../../styles';
import EgorBlueScreen from '../otherScreen/EgorBlueScreen';
import EgorGreyScreen from '../otherScreen/EgorGreyScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.grayLight,
  },
});

const MainSwipe = observer(() => (
  <Swiper horizontal={false} showsPagination={false}>
    <EgorBlueScreen />
    <EgorGreyScreen />
  </Swiper>
));

export default MainSwipe;
