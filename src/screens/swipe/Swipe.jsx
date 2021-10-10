import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from '../../styles';
import SwipeCard from '../../components/SwipeCard';
import VideoCard from '../../components/VideoCard';
import ButtonMenu from '../../components/ButtonMenu';
import monophy from '../../assets/images/monophy.gif';
import AgeCard from '../../components/AgeCard';
import SliderCard from '../../components/SliderCard';
import EndCard from '../../components/EndCard';
import TopChart from '../../components/TopChart';

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
    image: monophy,
    containerStyle: { backgroundColor: Colors.blueLighter },
    text: 'смахните экран вверх',
  },
  {
    isAgeCard: true,
  },
  {
    isSliderCard: true,
  },
  {
    isTopChart: true,
  },
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
    text: 'video tik',
  },
  {
    isEnd: true,
  },
];

const Swipe = () => (
  <View style={styles.container}>
    <Swiper horizontal={false} showsPagination={false}>
      {swipeData.map((item, id) => {
        if (item.isEnd) {
          return <EndCard key={id.toString()} />;
        }
        if (item.isSliderCard) {
          return <SliderCard key={id.toString()} />;
        }
        if (item.isAgeCard) {
          return <AgeCard key={id.toString()} />;
        }
        if (item.isTopChart) {
          return <TopChart key={id.toString()} />;
        }
        if (item.video) {
          return <VideoCard key={id.toString()} url={item.video.url} />;
        }
        return <SwipeCard key={id.toString()} image={item.image} containerStyle={item.containerStyle} text={item.text} />;
      })}
    </Swiper>
    <ButtonMenu />
  </View>
);

export default Swipe;
