import React from "react";
import {
  Text, StyleSheet, ImageBackground, Image, Platform,
} from 'react-native';
import { Colors } from '../styles';
import backgroundGradient from '../assets/images/backgroundGradient.jpg';
import swipeUp from '../assets/images/swipeUp.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeImage: {
    top: '-5%',
    width: '30%',
    height: '10%',
  },
  text: {
    color: Colors.white,
    fontSize: 22,
  }
});

const WelcomeSwipeCard = () => (
  <ImageBackground source={backgroundGradient} style={styles.imageBackground}>
    <Image source={swipeUp} style={styles.swipeImage}/>
    <Text style={styles.text}>Смахните экран вверх</Text>
  </ImageBackground>
);

export default WelcomeSwipeCard;