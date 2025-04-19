import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import HomeScreen from '../screens/HomeScreen.jsx';
import StatScreen from '../screens/StatScreen.jsx';
import WeatherScreen from '../screens/WeatherScreen.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <Footer {...props} />}
      screenOptions={({ route }) => ({
        header: () => {
          let type = 'main';
          if (route.name === 'Estadísticas' || route.name === 'Condiciones') type = 'section';
          return <Header type={type} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Estadísticas" component={StatScreen} />
      <Tab.Screen name="Condiciones" component={WeatherScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}