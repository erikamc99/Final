import { View, Text } from 'react-native';
import styles from '../styles/TemporallyScreens'
import { useSpace } from '../context/SpaceContext';

export default function HomeScreen() {
  const { selectedSpace } = useSpace();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Pantalla de Inicio</Text>
      <Text>{selectedSpace}</Text>
    </View>
  );
}