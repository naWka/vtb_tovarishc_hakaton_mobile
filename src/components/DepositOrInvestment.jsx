import React from "react";
import {
  Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import finance from '../assets/images/finance.png';
import calendar from '../assets/images/calendar.png';
import cash from '../assets/images/cash.png';
import stocks from '../assets/images/stocks.png';
import coinsBig from '../assets/images/coinsBig.png';
import cashBig from '../assets/images/cashBig.png';
import brokerBig from '../assets/images/brokerBig.png';

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
    fontSize: 25,
  },
  priceTextBig: {
    color: 'white',
    fontSize: 40,
  },
  iconMedium: { 
    width: 40, 
    height: 40, 
    marginRight: 8 
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
  buttonContainerLight: {
    marginTop: 20,
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  resultCard: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinsBig: { 
    width: 80, 
    height: 80, 
    marginTop: 15
  },
  imageBigOutline: {
    position: 'absolute',
    top: -60,
    left: -10,
    width: 120,
    height: 120,
    backgroundColor: 'transparent',
  }
});

const DepositOrInvestment = () => {
  const cardBegin = 'begin';
  const cardDeposit = 'deposit';
  const cardInvestment = 'investment';

  const [activeCard, setActiveCard] = React.useState(cardBegin);

  const handleToBegin = () => {
    setActiveCard(cardBegin);
  }

  const handleChooseDeposite = () => {
    setActiveCard(cardDeposit);
  };

  const handleChooseInvestment = () => {
    setActiveCard(cardInvestment);
  };

  const renderSwitch = (param) => {
    switch(param) {
      case cardBegin: 
        return (
          <View style={styles.card}>
            <Text style={styles.cardTextTitle}>Представим,</Text>
            <Text style={styles.cardText}>Сейчас 2018 год.</Text>
            <Text style={styles.cardTextTitle}></Text>
            <Text style={styles.cardText}>Нужно вложить</Text>
            <View style={styles.priceContainer}>
              <Image source={finance} style={styles.iconMedium} resizeMode="contain" />
              <Text style={styles.priceText}>20 000 ₽</Text>
            </View>
            <View style={styles.priceContainer}>
              <Image source={calendar} style={styles.iconMedium} resizeMode="contain" />
              <Text style={styles.priceText}>Срок 3 года</Text>
            </View>
            <Text style={styles.cardTextTitle}></Text>
            <TouchableOpacity onPress={handleChooseDeposite}>
              <View style={styles.buttonContainer}>
                <Image source={cash} style={styles.iconMedium} resizeMode="contain" />
                <Text style={styles.buttonText}>Вклад</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChooseInvestment}>
              <View style={styles.buttonContainer}>
                <Image source={stocks} style={styles.iconMedium} resizeMode="contain" />
                <Text style={styles.buttonText}>Акции</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      case cardDeposit:
        return (
          <View style={styles.card}>
            <Image source={cashBig} style={styles.imageBigOutline} />
            <Text style={styles.cardTextTitle}>2021 год</Text>
            <Text style={styles.cardText}>Вклад.</Text>
            <View style={styles.resultCard}>
              <Text style={styles.cardText}>Твой доход</Text>
              <Image source={coinsBig} style={styles.coinsBig} resizeMode="contain" />
              <Text style={styles.priceTextBig}>21 203 ₽</Text>
            </View>
            <TouchableOpacity onPress={handleToBegin}>
              <View style={styles.buttonContainerLight}>
                <Text style={styles.buttonText}>вернуться назад</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      case cardInvestment:
        return (
          <View style={styles.card}>
            <Image source={brokerBig} style={styles.imageBigOutline} />
            <Text style={styles.cardTextTitle}>2021 год</Text>
            <Text style={styles.cardText}>Акции.</Text>
            <View style={styles.resultCard}>
              <Text style={styles.cardText}>Твой доход</Text>
              <Image source={coinsBig} style={styles.coinsBig} resizeMode="contain" />
              <Text style={styles.priceTextBig}>28 000 ₽</Text>
            </View>
            <TouchableOpacity onPress={handleToBegin}>
              <View style={styles.buttonContainerLight}>
                <Text style={styles.buttonText}>вернуться назад</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
  }

  return (
    <LinearGradient
      colors={['rgba(66, 164, 241, 1)', 'rgba(33, 86, 134, 1)', 'rgba(15, 35, 67, 1)']}
      style={styles.container}>
      { renderSwitch(activeCard) }
    </LinearGradient>
  );
};

export default DepositOrInvestment;