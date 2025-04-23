import { View, Text, Image } from 'react-native';
import styles from '../../styles/components/cards/TemperatureCardStyles';

export default function TemperatureCard({ hour, temperature }) {
    return (
      <View style={styles.card}>
        <Text style={styles.hour}>{hour}</Text>
        <Image source={require('../../assets/img/temp-icon.png')} style={styles.icon} />
        <Text style={styles.temperature}>{temperature}°C</Text>
      </View>
    );
  }