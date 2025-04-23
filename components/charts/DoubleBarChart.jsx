import { View, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import styles from '../../styles/components/charts/DoubleBarChartStyles';

export default function DoubleBarChart({ title, data1, data2, labels=[], label1 = 'Agua', label2 = 'Comida' }) {
    const barData = data1.map((value, index) => ({
        stacks: [
          { value: value || 0, color: '#4DB6AC' },
          { value: data2[index] || 0, color: '#FFA726' },
        ],
        label: labels[index] || `D${index + 1}`,
      }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <BarChart
        stackData={barData}
        height={200}
        barWidth={20}
        barSpacing={30}
        noOfSections={5}
        isAnimated
        yAxisColor="#ccc"
        xAxisColor="#ccc"
        xAxisLabelTextStyle={styles.axisText}
        yAxisTextStyle={styles.axisText}
        showYAxis
        showXAxis
        groupedBars
      />

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#4DB6AC' }]} />
          <Text style={styles.legendText}>{label1}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#FFA726' }]} />
          <Text style={styles.legendText}>{label2}</Text>
        </View>
      </View>
    </View>
  );
}