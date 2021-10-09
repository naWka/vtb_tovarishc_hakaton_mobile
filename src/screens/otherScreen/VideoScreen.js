import React from 'react';
import {
  Button,
  StyleSheet, View,
} from 'react-native';

import { Colors } from '../../styles';
import { Video, AVPlaybackStatus } from 'expo-av';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.blue,
  },
  backgroungImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.blue,
  },
});

const Url = "http://video.hakaton.website.yandexcloud.net/"

const VideoScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <Video
      ref={video}
      style={styles.backgroungImage}
      source={{
        uri: `${Url}v16-web.tiktok.com.mp4`,
      }}
      // useNativeControls
      resizeMode="contain"
      isLooping
    />
  );
};

export default VideoScreen;
