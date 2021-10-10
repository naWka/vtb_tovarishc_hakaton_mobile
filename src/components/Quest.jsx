import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  textBold: {
    color: 'white',
    fontSize: 26,
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 15,
  },
});

const Quest = () => {
  return (
    <LinearGradient
      colors={['rgba(176, 205, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 80, 148, 1)']}
      style={styles.container}
    >
      <Text style={styles.textBold}>Любишь квесты?</Text>
      <Text style={styles.text}>{'Пройди квест \nи получи акцию в подарок!'}</Text>
    </LinearGradient>
  );
};

export default Quest;
