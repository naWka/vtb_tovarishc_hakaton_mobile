import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity, Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/core';
import { Colors } from '../../styles';
import { Example } from '../../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.grayLight,
  },
});

const Main = observer(() => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>I'm main screen!</Text>
      <TouchableOpacity onPress={() => Example.setToken()}>
        <Text>{`count: ${Example.getCounter()}`}</Text>
      </TouchableOpacity>
      <Button title="go to other screen" onPress={() => navigation.navigate('OtherScreen')} />
    </SafeAreaView>
  );
});

export default Main;
