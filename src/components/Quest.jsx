import React from 'react';
import {
  Image,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { grandmother_1 } from '../assets/images/grandmother_1.png';
import { grandmother_2 } from '../assets/images/grandmother_2.png';

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
    padding: 30,
  },
  textBold: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
  },
  buttonLinear: {
    width: 300,
    height: 87,
    borderRadius: 10,
  },
  buttonTouchable: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
  },
});

const questsTree = [
  {
    quest: 'Знакомьтесь, это бабушка Галя. Бабушка получает пенсию\nи складывает под матрац кучкой.\n' +
      'Что будет с ее сбережениями\nчерез 2 года?',
    answers: ['Накопит очень много', 'Деньги обесценятся'],
    img: grandmother_1,
  },
  {
    quest: 'Бабушка Галя, поняла что хранить деньги под матрасом не выгодно.' +
      'Что посоветуете, вложить деньги \nв акции или облигации?',
    answers: ['Акции', 'Облигации'],
    img: grandmother_2,
  },
];

const Quest = () => {
  const containerColor = ['rgba(176, 205, 249, 1)', 'rgba(58, 131, 241, 1)', 'rgba(34, 80, 148, 1)'];
  const buttonColor = ['rgba(0, 56, 255, 1)', 'rgba(0, 133, 255, 1)'];
  const [start, end] = [{
    x: 0,
    y: 0.5,
  }, {
    x: 1,
    y: 0.5,
  }];
  const [begin, quest, done] = [1, 2, 3];

  const [activeCard, setActiveCard] = React.useState({
    next: begin,
  });

  const renderSwitch = (param) => {
    switch (param.next) {
      case begin:
        return (
          <View>
            <Text style={styles.textBold}>Любишь квесты?</Text>
            <Text style={styles.text}>{'Пройди квест \nи получи акцию в подарок!'}</Text>
            <LinearGradient start={start} end={end} colors={buttonColor} style={styles.buttonLinear}>
              <TouchableOpacity style={styles.buttonTouchable} onPress={() => {
                setActiveCard({
                  next: quest,
                  index: 0,
                });
              }}>
                <Text style={styles.textBold}>Играть</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        );
      case quest:
        var q = questsTree[param.index];
        var next = quest;
        if (questsTree.length === param.index + 1) {
          next = done;
        }
        return (
          <View style={{
            flex: 1,
            // flexDirection: 'column',
            setSelectedValue: 'space-evenly',
            selectedValue: 'space-evenly',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: 10,
            padding: 15,
            height: 100,
          }}>
            <Text style={styles.text}>{q.quest}</Text>
            {q.answers.map((item) => (
              <LinearGradient start={start} end={end} colors={buttonColor}
                              style={styles.buttonLinear}>
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => {
                  setActiveCard({
                    next: next,
                    index: param.index + 1,
                  });
                }}>
                  <Text style={styles.textBold}>{item}</Text>
                </TouchableOpacity>
              </LinearGradient>
            ))}
            <Image source={q.img} style={[
              {
                height: 150,
              }]} resizeMode="contain"/>
          </View>
        );
      case done:
        return (
          <View>
            <Text
              style={styles.text}>{'Отлично,\nты помог бабушке сделать накопления правильно!\n\nАкции выросли\nна 56 % за год!'}</Text>
            <LinearGradient start={start} end={end} colors={buttonColor}
                            style={styles.buttonLinear}>
              <TouchableOpacity style={styles.buttonTouchable} onPress={() => {
                setActiveCard({
                  next: begin,
                });
              }}>
                <Text style={styles.textBold}>Получить акцию</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        );
    };
  };

  return (
    <LinearGradient colors={containerColor} style={styles.container}>
      {renderSwitch(activeCard)}
    </LinearGradient>
  );
};

export default Quest;
