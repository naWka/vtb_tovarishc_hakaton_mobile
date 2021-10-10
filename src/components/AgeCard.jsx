import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import end from '../assets/images/ageend.jpeg';
import sword from '../assets/images/sword.png';
import myBack from '../assets/images/myBack.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    height: '60%',
    backgroundColor: 'rgba(20, 49, 92, 1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  cardText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 70,
  },
  likesContainer: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});

const AgeTest = ({ onLike }) => {
  const cards = [
    {
      text: 'Думаю, что на зубы нужно было начинать откладывать еще с карманных денег в школьные годы',
    },
    {
      text: 'Настоящий джедай знает истинное предназначение этого меча',
      image: sword,
      iamgeStyle: { width: '100%', height: 50 },
    },
    {
      iamgeStyle: { width: '100%', height: 250 },
      text: 'Что нужно моей спине',
      image: myBack,
    },
  ];

  const [activeCard, setActiveCard] = React.useState(0);
  const [score, setScore] = React.useState(20);

  const renderCard = () => (
    <View style={styles.card}>
      {cards[activeCard].image && <Image source={cards[activeCard].image} style={cards[activeCard].iamgeStyle} resizeMode="contain" />}
      <Text style={styles.cardText}>{cards[activeCard].text}</Text>
    </View>
  );

  const hendleDislikePress = () => {
    setScore(score - 10);
    next();
  };

  const hendleLikePress = () => {
    onLike();
    setScore(score + 10);
    next();
  };

  const next = () => {
    if (activeCard < cards.length) {
      setActiveCard(activeCard + 1);
    }
  };

  const isEnd = activeCard >= cards.length;
  return (
    <LinearGradient
      colors={['rgba(176, 205, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 80, 148, 1)']}
      style={styles.container}
    >
      {!isEnd ? renderCard() : <Image source={end} style={{ width: 250, height: 250 }} />}
      {!isEnd && (
      <View style={styles.likesContainer}>
        <TouchableOpacity onPress={hendleDislikePress}>
          <AntDesign name="dislike2" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={hendleLikePress}>
          <AntDesign name="like2" size={32} color="white" />
        </TouchableOpacity>

      </View>
      )}

    </LinearGradient>
  );
};

export default AgeTest;
