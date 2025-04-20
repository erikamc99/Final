import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.jsx';
import NotificationScreen from '../screens/NotificationScreen.jsx';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="Notificaciones" component={NotificationScreen} />
    </Stack.Navigator>
  );
}