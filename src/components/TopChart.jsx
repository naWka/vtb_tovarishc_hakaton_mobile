import React, { useState } from 'react';
import {
  Image,
  Linking, Platform,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import apple from '../assets/images/apple.png';
import google from '../assets/images/google.png';
import microsoft from '../assets/images/microsoft.png';
import tesla from '../assets/images/tesla.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  textBold: {
    color: 'white',
    fontSize: 26,
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 30,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

const handleLinkOpen = () => {
  Linking.openURL(Platform.OS === 'ios' ? 'https://apps.apple.com/ru/app/%D0%B2%D1%82%D0%B1-%D0%BC%D0%BE%D0%B8-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B8/id1364026756' : 'https://play.google.com/store/apps/details?id=ru.vtb.invest&hl=ru&gl=US');
};

const chartList = [
  {
    name: 'Apple',
    description: 'Доходность до 40% в год',
    img: apple,
  },
  {
    name: 'Google',
    description: 'Доходность до 36% в год',
    img: google,
  },
  {
    name: 'Tesla',
    description: 'Доходность до 28% в год',
    img: tesla,
  },
  {
    name: 'Microsoft',
    description: 'Доходность до 16% в год',
    img: microsoft,
  },
];

const TopChart = () => {

  return (
    <LinearGradient
      colors={['rgba(176, 205, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 80, 148, 1)']}
      style={styles.container}
    >
      <Text style={styles.textBold}>Чарт Акций</Text>
      {chartList.map((item, id) => {
        return (
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: 10,
            padding: 15,
            height: 100,
          }}>
            <Image source={item.img} style={[
              {
                flexBasis: 'auto',
                height: 50,
                width: 50,
              },
              {
                width: 40,
                height: 40,
                marginRight: 8,
              }]} resizeMode="contain"/>
            <View style={{
              flexBasis: 'auto',
            }}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          </View>
        );
      })}
      <LinearGradient
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0.5,
        }}
        colors={['rgba(0, 56, 255, 1)', 'rgba(0, 133, 255, 1)']}
        style={{
          width: 300,
          height: 87,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }} onPress={handleLinkOpen}>
          <Text style={styles.textBold}>Смотреть</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

export default TopChart;
