import { ScrollView, Text, View } from 'react-native';
import styles from '../styles/ConditionsScreenStyles'
import ConditionsBanner from '../components/cards/ConditionsBanner';
import TemperatureCard from '../components/cards/TemperatureCard';

export default function ConditionsScreen() {
  const temperature = 22;
  const satisfaction = 'Óptimo';
  const hourlyData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
    temperature: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
  }));
  const contamination = 65;
  const humidity = 80;
  const water = 70;
  const food = 50;

  return (
    <ScrollView style={styles.container}>
      <ConditionsBanner temperature={temperature} satisfaction={satisfaction} />

      <Text style={styles.sectionTitle}>HOY</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardList}>
        {hourlyData.map((item, idx) => (
          <TemperatureCard key={idx} hour={item.hour} temperature={item.temperature} />
        ))}
      </ScrollView>

      <PercentCondition title="Contaminación" percentage={contamination} color="#FF5252" />
      <PercentCondition title="Humedad" percentage={humidity} color="#2196F3" />

      <View style={styles.resourcesRow}>
        <PercentResources title="Agua" percentage={water} color="#00BCD4" />
        <PercentResources title="Comida" percentage={food} color="#8BC34A" />
      </View>
    </ScrollView>
  );
}