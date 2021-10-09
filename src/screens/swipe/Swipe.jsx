import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from '../../styles';
import SwipeCard from '../../components/SwipeCard';
import VideoCard from '../../components/VideoCard';
import WelcomeSwipeCard from '../../components/WelcomeSwipeCard';
import AgeCard from '../../components/AgeCard';
import SliderCard from '../../components/SliderCard';
import DepositOrInvestment from '../../components/DepositOrInvestment';
import EndCard from '../../components/EndCard';

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
    isWelcomeSwipe: true,
  },
  {
    isAgeCard: true,
  },
  {
    isDepositOrInvestment: true,
  },
  {
    isSliderCard: true,
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
        if (item.isWelcomeSwipe){
          return <WelcomeSwipeCard key={id.toString()} />;
        }
        if (item.isEnd) {
          return <EndCard key={id.toString()} />;
        }
        if (item.isSliderCard) {
          return <SliderCard key={id.toString()} />;
        }
        if (item.isAgeCard) {
          return <AgeCard key={id.toString()} />;
        }
        if (item.isDepositOrInvestment) {
          return <DepositOrInvestment key={id.toString()}/>
        }
        if (item.video) {
          return <VideoCard key={id.toString()} url={item.video.url} />;
        }
        return <SwipeCard key={id.toString()} image={item.image} containerStyle={item.containerStyle} text={item.text} />;
      })}
    </Swiper>
  </View>
);

export default Swipe;
