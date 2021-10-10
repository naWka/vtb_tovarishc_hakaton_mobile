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
import TopChart from '../../components/TopChart';
import Quest from '../../components/Quest';

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

const StorageUrl = 'http://video.hakaton.website.yandexcloud.net/';

const swipeData = [
  { object: WelcomeSwipeCard },
  { isAgeCard: true },
  { object: DepositOrInvestment },
  { object: SliderCard },
  { object: TopChart },
  { object: Quest },
  {
    videoOld: { url: `${StorageUrl}v16-web.tiktok.com.mp4` },
    videoYang: { url: `${StorageUrl}v16-web.tiktok.com-2.mp4` },
    text: 'video tik',
  },
  { object: EndCard },
];

const Swipe = () => {
  const [ageCardLikes, setAgeCardLikes] = React.useState(0);
  return (
    <View style={styles.container}>
      <Swiper horizontal={false} showsPagination={false} loop={false} index={0}>
        {swipeData.map((item, id) => {
          if (item.isAgeCard) {
            return <AgeCard key={id.toString()} onLike={() => setAgeCardLikes(ageCardLikes + 1)} />;
          }
          if (item.object) {
            return <item.object key={id.toString()} />;
          }
          if (item.videoOld) {
            return <VideoCard key={id.toString()} url={ageCardLikes >= 2 ? item.videoOld.url : item.videoYang.url} />;
          }
          return <SwipeCard key={id.toString()} image={item.image} containerStyle={item.containerStyle} text={item.text} />;
        })}
      </Swiper>
    </View>
  );
};

export default Swipe;
