// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swipe from '../screens/swipe/Swipe';
import EntryScreen from '../screens/entryScreen/EntryScreen';
import AgeTest from '../screens/ageTest/AgeTest';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EntryScreen" component={EntryScreen} />
        <Stack.Screen
          name="Swipe"
          component={Swipe}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AgeTest"
          component={AgeTest}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
