import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ConditionsScreenStyles'
import ConditionsBanner from '../components/cards/ConditionsBanner';
import TemperatureCard from '../components/cards/TemperatureCard';
import PercentCondition from '../components/PercentCondition';
import PercentResources from '../components/PercentResources';
import HelpModal from '../components/modals/HelpModal';
import useHelp from '../hooks/useHelp';
import { Ionicons } from '@expo/vector-icons';

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

    const {
      visible,
      currentText,
      isLast,
      onNext,
      onSkip,
      triggerManually
    } = useHelp(('Condiciones'));

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={triggerManually} style={styles.helpButton}>
        <Ionicons name="help-circle-outline" style={styles.helpIcon} />
      </TouchableOpacity>
      <ConditionsBanner temperature={temperature} satisfaction={satisfaction} />

      <Text style={styles.sectionTitle}>HOY</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardList}>
        {hourlyData.map((item, idx) => (
          <TemperatureCard key={idx} hour={item.hour} temperature={item.temperature} />
        ))}
      </ScrollView>

      <PercentCondition title="Contaminación" percentage={contamination} color="#FF5252" />
      <PercentCondition title="Humedad" percentage={humidity} color="#2196F3" />

      <Text style={styles.title}>Suministros</Text>
      <View style={styles.resourcesRow}>
        <PercentResources label="Agua" percentage={water} color="#00BCD4" />
        <PercentResources label="Comida" percentage={food} color="#905010" />
      </View>

      <HelpModal
        visible={visible}
        text={currentText}
        isLast={isLast}
        onNext={onNext}
        onSkip={onSkip}
      />      
    </ScrollView>
  );
}