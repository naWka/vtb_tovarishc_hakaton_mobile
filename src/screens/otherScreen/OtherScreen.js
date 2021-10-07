import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react';
import { Colors } from '../../styles';
import { Example } from '../../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.grayLight,
  },
});

const OtherScreen = observer(() => (
  <SafeAreaView style={styles.container}>
    <Text>I'm OtherScreen screen!</Text>
    <TouchableOpacity onPress={() => Example.setToken()}>
      <Text>{`count: ${Example.getCounter()}`}</Text>
    </TouchableOpacity>
  </SafeAreaView>
));

export default OtherScreen;
