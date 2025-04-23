import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import SatisfactionMeter from '../components/cards/SatisfactionMeter';
import AnimalCountsCard from '../components/cards/AnimalCountsCard';
import useHelp from '../hooks/useHelp';
import HelpModal from '../components/modals/HelpModal';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  // Borrar al conectar a back
  const temperature = 22;
  const humidity = 60;
  const pollution = 30;
  
  const galloCount = 10;
  const gallinaCount = 10;
  const pollitoCount = 10;

  const satisfactionValue = 75;

  const {
    visible,
    currentText,
    isLast,
    onNext,
    onSkip,
    triggerManually
  } = useHelp(('Home'));

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={triggerManually} style={styles.helpButton}>
        <Ionicons name="help-circle-outline" style={styles.helpIcon} />
      </TouchableOpacity>
      <View style={{...styles.cardLarge, marginTop: 15}}>
        <Text style={styles.cardTitle}>Temperatura</Text>
        <View style={styles.cardContent}>
          <Text style={styles.cardValue}>{temperature}°C</Text>
          <Image source={require('../assets/img/temp-icon.svg')} style={styles.cardIcon} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={{ ...styles.cardSmall, marginRight: 20 }}>
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

      <AnimalCountsCard galloCount={galloCount} gallinaCount={gallinaCount} pollitoCount={pollitoCount} openScreen={() => navigation.navigate('GestionAnimales')} />

      <View style={styles.satisfactionContainer}>
        <Text style={styles.sectionTitle}>Bienestar</Text>
        <SatisfactionMeter value={satisfactionValue} /> {/* Cambiar por la prop traida de back o hacer el calculo para ello */}
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
