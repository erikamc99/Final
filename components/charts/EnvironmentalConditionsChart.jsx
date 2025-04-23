import styles from '../../styles/components/charts/EnvironmentalConditionsChartStyles';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { environmentalStats } from '../../data/mockStats';

export default function EnvironmentalConditionsChart() {
  const { labels, humidity, contamination } = environmentalStats;

  const humidityData = humidity.map((value) => ({ value }));
  const contaminationData = contamination.map((value) => ({ value }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Condiciones ambientales</Text>
        <LineChart
          data={humidityData}
          data2={contaminationData}
          color1="#42A5F5"
          color2="#EF5350"
          height={220}
          curved
          thickness={2}
          hideDataPoints
          yAxisColor="#888"
          xAxisColor="#888"
          xAxisLabelTextStyle={styles.axisText}
          yAxisTextStyle={styles.axisText}
        />
        <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#42A5F5' }]} />
          <Text style={styles.legendText}>Humedad</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#EF5350' }]} />
          <Text style={styles.legendText}>Contaminación</Text>
        </View>
      </View>
    </View>
  );
}