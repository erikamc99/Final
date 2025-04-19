import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator.jsx';
import { SpaceProvider } from './context/SpaceContext.js';

export default function App() {
  return (
    <SpaceProvider>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
    </SpaceProvider>
  );
}