import React from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroungImage: {
    width: 300,
    height: 400,
  },
  text: {
    fontSize: 32,

  },
});
const SwipeCard = ({ image, containerStyle, text }) => (
  <View style={[styles.container, containerStyle]}>
    <Image
      resizeMode="contain"
      source={image}
      style={styles.backgroungImage}
    />
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default React.memo(SwipeCard);
