import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/components/PercentConditionStyles';

export default function PercentCondition({ title, percentage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.barWrapper}>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
        <Feather name="arrow-down" size={20} color="#2E7D32" style={[styles.arrow, { left: `${percentage}%` }]} />
      </View>
    </View>
  );
}
