import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Home';
import Profile from '../Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Single from '../Single';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Stackscreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Single" component={Single} />
    </Stack.Navigator>
  );
};

const Tabscreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stackscreen />
    </NavigationContainer>
  );
};

export default Navigator;
