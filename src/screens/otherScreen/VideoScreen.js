import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Video } from 'expo-av';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroungImage: {
    width: '100%',
    height: '100%',
  },
});

const VideoScreen = ({ url }) => {
  const video = React.useRef(null);
  return (
    <Video
      ref={video}
      style={{ width: '117%', height: '100%' }}
      source={{
        uri: url,
      }}
      resizeMode="contain"
      isLooping
      shouldPlay
    />
  );
};

export default VideoScreen;
