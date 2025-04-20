import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/components/cards/SatisfactionMeterStyles';

export default function SatisfactionMeter({ value }) {
  const getSatisfactionLevel = (val) => {
    if (val <= 33) return { label: 'Bajo', color: '#EF5350',  icon: 'sad' };
    if (val <= 66) return { label: 'Medio', color: '#FFA726', icon: 'remove-circle-outline' };
    return { label: 'Alto', color: '#66BB6A', icon: 'happy' };
  };

  const { label, color, icon } = getSatisfactionLevel(value);
  const positionPercent = `${value}%`;

  return (
      <View style={styles.barBackground}>
        <View style={[styles.fill, { width: `${value}%`, backgroundColor: color }]} />
        <View style={[styles.indicator, { left: positionPercent }]}>
            <Ionicons name={icon} size={30} color="#000" />
        </View>
      </View>
  );
}
