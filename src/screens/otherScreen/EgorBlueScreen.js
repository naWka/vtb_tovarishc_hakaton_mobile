import React from 'react';
import {
  ImageBackground,
  StyleSheet, View,
} from 'react-native';

import { Colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.blue,
  },
  backgroungImage: {
    width: '100%',
    height: '100%',
  },
});

const EgorScreen = () => {
  const image = { uri: 'https://www.vtb.ru/-/media/headlesscms/main/hero_new/invest_10-2021/person/person_375.png' };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.backgroungImage}
      />
    </View>
  );
};

export default EgorScreen;
