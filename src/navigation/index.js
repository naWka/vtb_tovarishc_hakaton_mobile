// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/main/Main';
import OtherScreen from '../screens/otherScreen/OtherScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
