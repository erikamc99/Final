import { View, Text } from 'react-native';
import styles from '../styles/TemporallyScreens'

export default function StatScreen() {
  return (
    <View style={{ flex: 1, zIndex: 0 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Estadísticas</Text>
      </View>
    </View>
  );
}