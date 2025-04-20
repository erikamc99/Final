import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.jsx';
import NotificationScreen from '../screens/NotificationScreen.jsx';
import AddSpaceScreen from '../screens/add-space/AddSpaceScreen.jsx';
import AddAnimalScreen from '../screens/add-space/AddAnimalScreen.jsx';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="Notificaciones" component={NotificationScreen} />
      <Stack.Screen name="NuevoEspacio" component={AddSpaceScreen} />
      <Stack.Screen name="NuevoAnimal" component={AddAnimalScreen} />
    </Stack.Navigator>
  );
}