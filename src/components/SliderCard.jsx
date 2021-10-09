import React from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import finance from '../assets/images/finance.png';
import time from '../assets/images/time.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 10,
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
  text: {
    marginTop: 18,
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  priceContainer: {
    marginTop: 30,
    width: 250,
    height: 90,
    backgroundColor: 'rgba(11, 29, 55, 0.5)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  priceText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  yearsContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const defSumm = 100000;
const defYear = 2021;
const SliderCard = () => {
  const [summ, setSumm] = React.useState(defSumm);
  const [year, setYear] = React.useState(defYear);
  const handleValueChange = (val) => {
    console.log('val', { val });
    setYear(defYear + val);
    if (val === 0) {
      setYear(defYear);
      setSumm(defSumm);
    }
    if (val > 0) {
      setSumm(defSumm * Math.pow(1.1, val));
    }
  };
  return (
    <LinearGradient
      colors={['rgba(176, 205, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 80, 148, 1)']}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Отправься в будущее со сложным процентом</Text>
        <Text style={styles.text}>У нас было 100 000р и 10 лет. Посмотри как рос твой капитал</Text>
        <View style={styles.priceContainer}>
          <Image source={finance} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
          <Text style={styles.priceText}>{`${summ.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Image source={time} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
          <Text style={styles.priceText}>{year}</Text>
        </View>
        <Slider
          style={{ width: 300, height: 40, marginTop: 40 }}
          step={1}
          onValueChange={handleValueChange}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#FFFFFF"
        />
        <View style={styles.yearsContainer}>
          <Text style={styles.priceText}>2021</Text>
          <Text style={styles.priceText}>2031</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SliderCard;
