import React from "react";
import {
  Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import finance from '../assets/images/finance.png';
import calendar from '../assets/images/calendar.png';
import cash from '../assets/images/cash.png';
import stocks from '../assets/images/stocks.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: '70%',
    borderRadius: 12,
    padding: 16,
  },
  cardTextTitle: {
    color: 'white',
    fontSize: 35,
  },
  cardText: {
    marginTop: 5,
    color: 'white',
    fontSize: 30,
  },
  priceContainer: {
    marginTop: 30,
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  priceText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    height: 70,
    backgroundColor: '#0B1D37',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    // fontWeight: 'bold',
  },
});

const DepositOrInvestment = () => {
  return (
    <LinearGradient
      colors={['rgba(166, 195, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 50, 130, 1)']}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.cardTextTitle}>Представим</Text>
        <Text style={styles.cardText}>Сейчас 2018 год.</Text>
        <Text style={styles.cardTextTitle}></Text>
        <Text style={styles.cardText}>Нужно вложить</Text>
        <View style={styles.priceContainer}>
          <Image source={finance} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
          <Text style={styles.priceText}>20 000₽</Text>
        </View>
        <View style={styles.priceContainer}>
          <Image source={calendar} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
          <Text style={styles.priceText}>Срок 3 года</Text>
        </View>
        <Text style={styles.cardTextTitle}></Text>
        <Text style={styles.cardText}>Выберите</Text>

        <TouchableOpacity onPress={() => console.log('pressed deposit')}>
          <View style={styles.buttonContainer}>
            <Image source={cash} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
            <Text style={styles.buttonText}>Вклад</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('pressed stocks')}>
          <View style={styles.buttonContainer}>
            <Image source={stocks} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
            <Text style={styles.buttonText}>Акции</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default DepositOrInvestment;