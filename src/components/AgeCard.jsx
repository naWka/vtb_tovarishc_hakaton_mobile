import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

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
    justifyContent: 'center',
    padding: 16,
  },
  cardText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  likesContainer: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});

const cards = [
  {
    text: 'Думаю, что на зубы нужно было начинать откладывать еще с карманных денег в школьные годы',
  },
  {
    text: 'Настоящий джедай знает истинное предназначение этого меча',
  },
  {
    text: 'Что нужно моей спине',
  },
];
const AgeTest = ({ onLike }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [score, setScore] = React.useState(20);

  const renderCard = () => (
    <View style={styles.card}>
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
      {!isEnd && renderCard()}
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
