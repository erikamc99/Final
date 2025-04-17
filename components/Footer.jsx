import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Footer({ state, navigation }) {
  const icons = {
    Inicio: 'home',
    Estadísticas: 'bar-chart-2',
    Tiempo: 'cloud',
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
              size={24}
              color={isFocused ? '#4CAF50' : '#888'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});