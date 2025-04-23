import styles from '../../styles/components/charts/SingleBarChartStyles';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

export default function SingleBarChart({ title, data, color = '#42A5F5' }) {
  const formattedData = data.map((value, i) => ({
    value,
    label: `D${i + 1}`,
    frontColor: color,
    labelTextStyle: styles.axisText,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <BarChart
        data={formattedData}
        height={200}
        barWidth={22}
        spacing={16}
        barBorderRadius={6}
        yAxisColor="#bbb"
        xAxisColor="#bbb"
        noOfSections={4}
      />
    </View>
  );
}