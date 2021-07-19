import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Details, About} from '_screens';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
