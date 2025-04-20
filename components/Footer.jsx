import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/FooterStyles.js';

export default function Footer({ state, navigation }) {

  const icons = {
    Inicio: 'home',
    Estadísticas: 'bar-chart-2',
    Condiciones: 'cloud',
    Perfil: 'user',
  };

  return (
    <View style={styles.footer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}
          >
            <Feather
              name={icons[route.name] || 'circle'}
              size={30}
              color={isFocused ? '#4CAF50' : '#888'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}