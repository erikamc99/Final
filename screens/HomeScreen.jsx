import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import SatisfactionMeter from '../components/cards/SatisfactionMeter';
import AnimalCountsCard from '../components/cards/AnimalCountsCard';

export default function HomeScreen() {
  // Borrar al conectar a back
  const temperature = 22;
  const humidity = 60;
  const pollution = 30;
  
  const galloCount = 10;
  const gallinaCount = 10;
  const pollitoCount = 10;

  const satisfactionValue = 75;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardLarge}>
        <Text style={styles.cardTitle}>Temperatura</Text>
        <View style={styles.cardContent}>
          <Text style={styles.cardValue}>{temperature}°C</Text>
          <Image source={require('../assets/img/temp-icon.svg')} style={styles.cardIcon} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cardSmall}>
          <Text style={styles.cardTitle}>Humedad</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardValue}>{humidity}%</Text>
            <Image source={require('../assets/img/humidity-icon.png')} style={styles.cardIcon} />
          </View>
        </View>

        <View style={styles.cardSmall}>
          <Text style={styles.cardTitle}>Contaminación</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardValue}>{pollution} ppm</Text>
            <Image source={require('../assets/img/pollution-icon.png')} style={styles.cardIcon} />
          </View>
        </View>
      </View>

      <AnimalCountsCard galloCount={galloCount} gallinaCount={gallinaCount} pollitoCount={pollitoCount} />

      <View style={styles.satisfactionContainer}>
        <Text style={styles.sectionTitle}>Bienestar</Text>
        <SatisfactionMeter value={satisfactionValue} /> {/* Cambiar por la prop traida de back o hacer el calculo para ello */}
      </View>
    </ScrollView>
  );
}
