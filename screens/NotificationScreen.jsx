import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/NotificationScreenStyles.js';
import SectionHeader from '../components/SectionHeader.jsx';

//BORRAR al conectar al back
const notifications = [
    {
      id: 1,
      type: 'humedad',
      title: 'Alta humedad detectada',
      message: 'La humedad en MyFarm ha superado el 80%.',
      time: 'Hace 5 minutos',
    },
    {
      id: 2,
      type: 'temperatura',
      title: 'Temperatura fuera de rango',
      message: 'La temperatura ha bajado a 4°C.',
      time: 'Hace 1 hora',
    },
    {
      id: 3,
      type: 'agua',
      title: 'Tanque bajo de agua',
      message: 'Nivel de agua en el tanque principal es inferior al 10%.',
      time: 'Ayer',
    },
    {
      id: 4,
      type: 'contaminacion',
      title: 'Contaminación detectada',
      message: 'Se ha detectado un aumento en los niveles de contaminación.',
      time: 'Hace 2 días',
    },
    {
      id: 5,
      type: 'comida',
      title: 'Comida baja',
      message: 'El nivel de comida en la despensa es inferior al 20%.',
      time: 'Hace 3 días',
    },

];

  
const getNotificationIcon = (type) => {
    switch (type) {
      case 'temperatura':
        return require('../assets/img/temp-icon.svg');
      case 'humedad':
        return require('../assets/img/humidity-icon.png');
      case 'contaminacion':
        return require('../assets/img/pollution-icon.png');
      case 'comida':
        return require('../assets/img/food-icon.png');
      case 'agua':
        return require('../assets/img/water-icon.png');
      default:
        return require('../assets/img/default-avatar.png');
    }
  };

export default function NotificationScreen() {
    
    return (
        <ScrollView style={styles.container}>
          <SectionHeader sectionTitle="Notificaciones" />
            {notifications.map((n) => (
                <View key={n.id} style={styles.card}>
                <Image source={require('../assets/img/alert-icon.png')} style={styles.alertIcon} />
                
                <View style={styles.textContainer}>
                    <Text style={styles.notificationTitle}>{n.title}</Text>
                    <Text style={styles.message}>{n.message}</Text>
                    <Text style={styles.time}>{n.time}</Text>
                </View>
                
                <Image source={getNotificationIcon(n.type)} style={styles.typeIcon} />
                </View>
            ))}
        </ScrollView>
    )
}