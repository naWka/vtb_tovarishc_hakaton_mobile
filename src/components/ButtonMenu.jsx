import React from "react";
import {
    View, StyleSheet, Button, Image, Linking,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/core';
  import { Colors } from '../styles';
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: Colors.grayLight,
    },
    style: {
        position: 'absolute',
        top: 40,
        bottom: 0,
        right: 0,
        width: '20%',
        height: '10%',
        backgroundColor: 'transparent',
    }
  });
  
  const ButtonMenu = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.style}>
        <Button title="menu" onPress={() => navigation.navigate('Menu')} />
      </View>
    );
  };
  
  export default ButtonMenu;