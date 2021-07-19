import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Details, About} from '_screens';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function NavigationStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={faHome} size={25} color={'black'} />
          ),
        }}
      />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
}
