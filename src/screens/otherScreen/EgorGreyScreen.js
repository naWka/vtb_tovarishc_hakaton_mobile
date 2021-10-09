import React from 'react';
import {
  Button,
  ImageBackground,
  Linking,
  Platform,
  StyleSheet, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroungImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  button: {
  },
});

const EgorScreen = () => {
  const image = { uri: 'https://www.vtb.ru/-/media/headlesscms/main/hero_new/invest_10-2021/person/person_375.png' };
  const handleLinkOpen = () => {
    Linking.openURL(Platform.OS === 'ios' ? 'https://apps.apple.com/ru/app/%D0%B2%D1%82%D0%B1-%D0%BC%D0%BE%D0%B8-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B8/id1364026756' : 'https://play.google.com/store/apps/details?id=ru.vtb.invest&hl=ru&gl=US');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.backgroungImage}
      >
        <Button style={styles.button} onPress={handleLinkOpen} title="open vtb app" />
      </ImageBackground>
    </View>
  );
};

export default EgorScreen;
