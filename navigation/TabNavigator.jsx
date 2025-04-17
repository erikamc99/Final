import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import HomeScreen from '../screens/HomeScreen.jsx';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBar: (props) => <Footer {...props} />,
      }}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
    </Tab.Navigator>
  );
}