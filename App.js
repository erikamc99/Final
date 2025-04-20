import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator.jsx';
import { SpaceProvider } from './context/SpaceContext.js';
import { UserProvider } from './context/UserContext.js';

export default function App() {
  return (
    <UserProvider>
      <SpaceProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SpaceProvider>
    </UserProvider>
  );
}