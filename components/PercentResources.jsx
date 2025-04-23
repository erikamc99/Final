import { View, Text } from 'react-native';
import styles from '../styles/components/PercentResourcesStyles';

export default function PercentResources({ label, percentage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.circleWrapper}>
        <View style={[styles.circle, { height: `${percentage}%` }]} />
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
    </View>
  );
}