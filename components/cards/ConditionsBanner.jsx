import { View, Text } from 'react-native';
import styles from '../../styles/components/cards/ConditionsBannerStyles';

export default function ConditionsBanner({ temperature, satisfaction }) {
  const getSatisfactionText = (s) => {
    switch (s) {
      case 'Óptimo':
        return 'Condiciones óptimas';
      case 'Moderado':
        return 'Condiciones moderadas';
      case 'Crítico':
        return 'Condiciones críticas';
      default:
        return 'Desconocido';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.temperature}>{temperature}°C</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.satisfaction}>{getSatisfactionText(satisfaction)}</Text>
      </View>
    </View>
  );
}
