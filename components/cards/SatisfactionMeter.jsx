import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/components/cards/SatisfactionMeterStyles';

export default function SatisfactionMeter({ value }) {
  const getSatisfactionLevel = (value) => {
    return {  icon: 'caret-down-outline', value:75, };
  };

  const { icon } = getSatisfactionLevel(value);
  const positionPercent = `${value}%`;
 // const isLow = value < 50;

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
{/*         {isLow && <Ionicons name={icon} size={24} style={{ position: 'absolute', right: `${positionPercent}`, top: 0 }} />}
         */}
         {!isLow && <Ionicons name={icon} size={24} style={{ position: 'absolute', left: positionPercent, top: 0 }} />}
        <View style={[styles.cornerLeftSection, { backgroundColor: '#EF5350' }]} />
        <View style={[styles.section, { backgroundColor: '#FFA726' }]} />
        <View style={[styles.section, { backgroundColor: '#FFEB3B' }]} />
        <View style={[styles.section, { backgroundColor: '#95bb66' }]} />
        <View style={[styles.cornerRightSection, { backgroundColor: '#66bb6a' }]} />
      </View>
    </View>
  );
}
