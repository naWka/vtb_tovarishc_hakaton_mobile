import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from '../../styles';
import SwipeCard from '../../components/SwipeCard';
import VideoScreen from '../otherScreen/VideoScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayLight,
  },
  backgroungImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.blue,
  },
});

const StorgeUrl = 'http://video.hakaton.website.yandexcloud.net/';

const swipeData = [
  {
    image: { uri: 'https://www.vtb.ru/-/media/headlesscms/main/hero_new/invest_10-2021/person/person_375.png' },
    containerStyle: { backgroundColor: Colors.blue },
    text: 'Egor 1',
  },
  {
    image: { uri: 'https://www.vtb.ru/-/media/headlesscms/main/hero_new/invest_10-2021/person/person_375.png' },
    containerStyle: { backgroundColor: Colors.red },
    text: 'Egor 2',
  },
  {
    image: { uri: 'https://www.vtb.ru/-/media/headlesscms/main/hero_new/invest_10-2021/person/person_375.png' },
    containerStyle: { backgroundColor: Colors.purple },
    text: 'Egor 3',
  },
  {
    video: { url: `${StorgeUrl}v16-web.tiktok.com.mp4` },
    text: 'Egor 3',
  },
];

const Swipe = () => (
  <View style={styles.container}>
    <Swiper horizontal={false} showsPagination={false}>
      {swipeData.map((item, id) => {
        if (item.video) {
          return <VideoScreen url={item.video.url} />;
        }
        return <SwipeCard key={id.toString()} image={item.image} containerStyle={item.containerStyle} text={item.text} />;
      })}
    </Swiper>
  </View>
);

export default Swipe;
