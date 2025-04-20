import { View, Text, FlatList } from 'react-native';
import styles from '../styles/NotificationScreenStyles.js';

//BORRAR al conectar al back
const mockNotifications = [
    { id: '1', message: 'Notificación 1' },
    { id: '2', message: 'Notificación 2' },
    { id: '3', message: 'Notificación 3' },
    { id: '4', message: 'Notificación 4' },
    { id: '5', message: 'Notificación 5' },
];

export default function NotificationScreen() {

    return (
        <View style={styles.container}>
            <FlatList
                data={mockNotifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.notificationItem}>
                        <Text style={styles.notificationText}>{item.message}</Text>
                    </View>
                )}
            />
        </View>
    )
}