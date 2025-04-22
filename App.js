import React from 'react';
import RootNavigator from './navigation/RootNavigator.jsx';
import { SpaceProvider } from './context/SpaceContext.js';
import { UserProvider } from './context/UserContext.js';

export default function App() {
  return (
    <UserProvider>
      <SpaceProvider>
          <RootNavigator />
      </SpaceProvider>
    </UserProvider>
  );
}