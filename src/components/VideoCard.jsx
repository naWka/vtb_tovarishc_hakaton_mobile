import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Video } from 'expo-av';
import { Colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroungImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black,
  },
});

const VideoCard = ({ url }) => {
  const video = React.useRef(null);
  return (
    <Video
      ref={video}
      style={styles.backgroungImage}
      source={{
        uri: url,
      }}
      resizeMode="contain"
      isLooping
      isMuted
      shouldPlay
    />
  );
};

export default VideoCard;
