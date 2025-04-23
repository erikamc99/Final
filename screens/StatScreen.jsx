import { Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/StatScreenStyles.js';
import HelpModal from '../components/modals/HelpModal.jsx';
import useHelp from '../hooks/useHelp.js';
import { Ionicons } from '@expo/vector-icons';
import SingleBarChart from '../components/charts/SingleBarChart.jsx';
import EnvironmentalConditionsChart from '../components/charts/EnvironmentalConditionsChart.jsx';
import { environmentalStats } from '../data/mockStats.js';
import DoubleBarChart from '../components/charts/DoubleBarChart.jsx';

export default function StatScreen() {
    // BORRAR AL CONECTAR CON BACK

    const temperature = environmentalStats.temperature;
    const humidity = environmentalStats.humidity;
    const contamination = environmentalStats.contamination;
    const water = environmentalStats.water;
    const food = environmentalStats.food;
    // HASTA AQUÍ BORRAR AL CONECTAR CON BACK
    const {
      visible,
      currentText,
      isLast,
      onNext,
      onSkip,
      triggerManually
    } = useHelp(('Estadísticas'));
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={triggerManually} style={styles.helpButton}>
        <Ionicons name="help-circle-outline" style={styles.helpIcon} />
      </TouchableOpacity>
      <Text style={styles.titleSection}>Estadísticas</Text>
      
      <EnvironmentalConditionsChart
        humidityData={humidity}
        contaminationData={contamination}
        temperatureData={temperature}
      />

      <SingleBarChart
        title="Humedad"
        data={humidity}
        color="#42A5F5"
      />

      <SingleBarChart
        title="Contaminación"
        data={contamination}
        color="#EF5350"
      />

      <DoubleBarChart
        title="Recursos disponibles"
        data1={water}
        data2={food}
        label1="Agua"
        label2="Comida"
      />
      <HelpModal visible={visible} text={currentText} isLast={isLast} onNext={onNext} onSkip={onSkip} />
    </ScrollView>
  );
}