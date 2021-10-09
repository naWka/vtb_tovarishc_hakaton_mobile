import React from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import finance from '../assets/images/finance.png';
import time from '../assets/images/time.png';
import doc from '../assets/images/doc.png';
import carFront from '../assets/images/carFront.png';
import carBack from '../assets/images/carBack.png';
import rate from '../assets/images/rate.png';

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
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
    marginTop: 20,
    width: 250,
    height: 60,
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
  doc: {
    height: 440,
    width: 307,
    position: 'absolute',
    bottom: -64,
  },
  carFront: {
    height: 270,
    width: 307,
    position: 'absolute',
    left: -24,
    bottom: 0,
  },
  carBack: {
    height: 270,
    width: 307,
    position: 'absolute',
    right: -32,
    bottom: 0,
  },
});

const defSumm = 100000;
const defYear = 2021;
const SliderCard = () => {
  const [summ, setSumm] = React.useState(defSumm);
  const [year, setYear] = React.useState(defYear);
  const handleValueChange = (val) => {
    setYear(defYear + val);
    if (val === 0) {
      setYear(defYear);
      setSumm(defSumm);
    }
    if (val > 0) {
      setSumm(defSumm * Math.pow(1.1, val));
    }
  };

  const renderImage = () => {
    switch (true) {
      case year >= 2021 && year < 2026:
        return <Image source={doc} style={styles.doc} resizeMode="contain" />;
      case year >= 2026 && year < 2031:
        return <Image source={carFront} style={styles.carFront} resizeMode="contain" />;
      case year === 2031:
        return <Image source={carBack} style={styles.carBack} resizeMode="contain" />;

      default:
        break;
    }
  };
  const renderText = () => {
    switch (true) {
      case year >= 2021 && year < 2026:
        return (
          <>
            <Text style={styles.title}>Отправься в будущее со сложным процентом</Text>
            <Text style={styles.text}>У нас было 100 000р и 10 лет. Посмотри как рос твой капитал</Text>
          </>
        );
      case year >= 2026 && year < 2031:
        return (
          <Text style={styles.title}>
            Если эта малышка разгонится до 88 миль
            в час, то она испытает серьезное перемещение!
          </Text>
        );
      case year === 2031:
        return <Text style={styles.title}>Дороги? Там, куда мы направляемся, дороги не нужны.</Text>;

      default:
        break;
    }
  };
  return (
    <LinearGradient
      colors={['rgba(176, 205, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 80, 148, 1)']}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        {renderText()}
        <View style={styles.priceContainer}>
          <Image source={finance} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
          <Text style={styles.priceText}>{`${summ.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Image source={time} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
          <Text style={styles.priceText}>{year}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Image source={rate} style={{ width: 40, height: 40, marginRight: 8 }} resizeMode="contain" />
          <Text style={styles.priceText}>Ставка 10%</Text>
        </View>
        <Slider
          style={{
            width: 300, height: 40, marginTop: 40, zIndex: 100,
          }}
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
        {renderImage()}
      </SafeAreaView>

    </LinearGradient>
  );
};

export default SliderCard;
