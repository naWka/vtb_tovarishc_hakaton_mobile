import React from 'react';
import {
  Image,
  StyleSheet, Text, TouchableOpacity, View, Linking, Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import grandmotherOne from '../assets/images/grandmother_1.png';
import grandmotherTwo from '../assets/images/grandmother_2.png';

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
    marginVertical: 10,
  },
  buttonTouchable: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
  },
  textBoldFix: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
  },
  end: {
    alignItems: 'center',
  },
});

const questsTree = [
  {
    quest: 'Знакомьтесь, это бабушка Галя. Бабушка получает пенсию\nи складывает под матрац кучкой.\n'
      + 'Что будет с ее сбережениями\nчерез 2 года?',
    answers: ['Накопит очень много', 'Деньги обесценятся'],
    img: grandmotherOne,
  },
  {
    quest: 'Бабушка Галя, поняла что хранить деньги под матрасом не выгодно.'
      + 'Что посоветуете, вложить деньги \nв акции или облигации?',
    answers: ['Акции', 'Облигации'],
    img: grandmotherTwo,
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

  const handleUrlOpen = () => {
    Linking.openURL(Platform.OS === 'ios' ? 'https://apps.apple.com/ru/app/%D0%B2%D1%82%D0%B1-%D0%BC%D0%BE%D0%B8-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B8/id1364026756' : 'https://play.google.com/store/apps/details?id=ru.vtb.invest&hl=ru&gl=US');
  };

  const renderSwitch = (param) => {
    switch (param.next) {
      case begin:
        return (
          <View>
            <Text style={styles.textBold}>Любишь квесты?</Text>
            <Text style={styles.text}>{'Пройди квест \nи получи акцию в подарок!'}</Text>
            <LinearGradient start={start} end={end} colors={buttonColor} style={styles.buttonLinear}>
              <TouchableOpacity
                style={styles.buttonTouchable}
                onPress={() => {
                  setActiveCard({
                    next: quest,
                    index: 0,
                  });
                }}
              >
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
          }}
          >
            <Text style={styles.text}>{q.quest}</Text>
            {q.answers.map((item, id) => (
              <LinearGradient
                key={id.toString()}
                start={start}
                end={end}
                colors={buttonColor}
                style={styles.buttonLinear}
              >
                <TouchableOpacity
                  style={styles.buttonTouchable}
                  onPress={() => {
                    setActiveCard({
                      next,
                      index: param.index + 1,
                    });
                  }}
                >
                  <Text style={styles.textBoldFix}>{item}</Text>
                </TouchableOpacity>
              </LinearGradient>
            ))}
            <Image
              source={q.img}
              style={[
                {
                  height: 300,
                }]}
              resizeMode="contain"
            />
          </View>
        );
      case done:
        return (
          <View style={styles.end}>
            <Text
              style={styles.text}
            >
              {'Отлично,\nты помог бабушке сделать накопления правильно!\n\nАкции выросли\nна 56 % за год!'}
            </Text>
            <LinearGradient
              start={start}
              end={end}
              colors={buttonColor}
              style={styles.buttonLinear}
            >
              <TouchableOpacity
                style={styles.buttonTouchable}
                onPress={handleUrlOpen}
              >
                <Text style={styles.textBold}>Получить акцию</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        );
    }
  };

  return (
    <LinearGradient colors={containerColor} style={styles.container}>
      {renderSwitch(activeCard)}
    </LinearGradient>
  );
};

export default Quest;
