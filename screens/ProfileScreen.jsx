import { View, Text } from 'react-native';
import styles from '../styles/TemporallyScreens'

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, zIndex: 0 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Perfil</Text>
      </View>
    </View>
  );
}