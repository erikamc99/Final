import { View, Text } from 'react-native';
import styles from '../../styles/components/cards/TemperatureCardStyles';

export default function TemperatureCard({ hour, temperature }) {
    return (
      <View style={styles.card}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.temperature}>{temperature}°C</Text>
      </View>
    );
  }