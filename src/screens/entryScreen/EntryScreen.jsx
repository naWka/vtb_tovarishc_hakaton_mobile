import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity, Button, Image, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/core';
import { Colors } from '../../styles';
import { Example } from '../../store';
import logo from '../../assets/images/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.grayLight,
  },
});

const handleLinkOpen = () => {
  Linking.openURL(Platform.OS === 'ios' ? 'https://apps.apple.com/ru/app/%D0%B2%D1%82%D0%B1-%D0%BC%D0%BE%D0%B8-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B8/id1364026756' : 'https://play.google.com/store/apps/details?id=ru.vtb.invest&hl=ru&gl=US');
};

const EntryScreen = observer(() => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>по клику на иконку перекинет на маркет с приложением втб</Text>
      <TouchableOpacity onPress={handleLinkOpen}>
        <Image source={logo} style={{ width: 93, height: 32 }} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Example.setToken()}>
        <Text>{`press me to count: ${Example.getCounter()}`}</Text>
      </TouchableOpacity>
      <Button title="go to swipe screen" onPress={() => navigation.navigate('Swipe')} />
    </SafeAreaView>
  );
});

export default EntryScreen;
