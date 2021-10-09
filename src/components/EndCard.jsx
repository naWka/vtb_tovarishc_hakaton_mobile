import React from 'react';
import {
  Text, Linking, StyleSheet, TouchableOpacity, ImageBackground, Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import egor from '../assets/images/egor.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // paddingTop: 23,
    // paddingHorizontal: 0,
  },
  egor: {
    width: 550,
    height: 600,
    marginTop: 40,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
  textBold: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',

  },
});

const handleLinkOpen = () => {
  Linking.openURL(Platform.OS === 'ios' ? 'https://apps.apple.com/ru/app/%D0%B2%D1%82%D0%B1-%D0%BC%D0%BE%D0%B8-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B8/id1364026756' : 'https://play.google.com/store/apps/details?id=ru.vtb.invest&hl=ru&gl=US');
};

const SliderCard = () => (
  <LinearGradient
    colors={['rgba(176, 205, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 80, 148, 1)']}
    style={styles.container}
  >
    <Text style={styles.text}>Установить приложение инвестиции легко!</Text>
    <ImageBackground source={egor} style={styles.egor} resizeMode="contain">
      <Text style={[styles.textBold, { marginBottom: 20 }]}>
        {'Даже Крид смог, \n а ты?'}
      </Text>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={['rgba(0, 56, 255, 1)', 'rgba(0, 133, 255, 1)']}
        style={{ width: 300, height: 87, borderRadius: 10 }}
      >
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={handleLinkOpen}>
          <Text style={styles.textBold}>Установить</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>

  </LinearGradient>
);

export default SliderCard;
