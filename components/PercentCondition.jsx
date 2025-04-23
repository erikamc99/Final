import { View, Text } from 'react-native';
import styles from '../styles/components/PercentConditionStyles';

export default function PercentCondition({ title, percentage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.barWrapper}>
        <Text style={styles.percentageText}>{percentage}%</Text>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}
