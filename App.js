import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation.jsx';
import { SpaceProvider } from './context/SpaceContext.js';

export default function App() {
  return (
    <SpaceProvider>
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
    </SpaceProvider>
  );
}