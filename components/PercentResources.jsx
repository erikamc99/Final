import { View, Text } from 'react-native';
import styles from '../styles/components/PercentResourcesStyles';

export default function PercentResources({ label, percentage, color }) {
  return (
    <View style={styles.container}>
      <View style={styles.circleWrapper}>
        <View style={[styles.circle, { height: `${percentage}%`, backgroundColor: color }]} />
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
        <Text style={styles.label}>{label}</Text>
    </View>
  );
}