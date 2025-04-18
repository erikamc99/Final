import { createContext, useState, useContext } from 'react';

const SpaceContext = createContext();

export const SpaceProvider = ({ children }) => {
  const [selectedSpace, setSelectedSpace] = useState('MyFarm');
  const [spaces, setSpaces] = useState(['MyFarm', 'MyFarm2']);

  return (
    <SpaceContext.Provider value={{ selectedSpace, setSelectedSpace, spaces, setSpaces }}>
      {children}
    </SpaceContext.Provider>
  );
};

export const useSpace = () => useContext(SpaceContext);