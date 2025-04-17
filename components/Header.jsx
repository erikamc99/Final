import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import SelectSpaceDropdown from './SelectSpaceDropdown';

export default function Header({ type = 'main', title = 'MyFarm', spaces = ['MyFarm'] }) {
  const [currentSpace, setCurrentSpace] = useState(title);
  const [modalVisible, setModalVisible] = useState(false);

  const showDropdown = spaces.length > 1;

  const handleSelect = (space) => {
    setCurrentSpace(space);
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.titleWrapper}
          onPress={() => showDropdown && setModalVisible(true)}
          disabled={!showDropdown}
        >
          <Text style={styles.title}>{currentSpace}</Text>
          {showDropdown && (
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="#fff"
              style={{ marginLeft: 4 }}
            />
          )}
        </TouchableOpacity>

        <View style={styles.actions}>
          {type === 'main' && (
            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Agregar espacio')}>
              <Feather name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          )}
          {type === 'section' && (
            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Configuración')}>
              <Ionicons name="settings-outline" size={20} color="#fff" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Notificaciones')}>
            <Ionicons name="notifications-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <SelectSpaceDropdown
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        spaces={spaces}
        onSelect={handleSelect}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
});