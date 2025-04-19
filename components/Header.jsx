import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {  Ionicons, Feather } from '@expo/vector-icons';
import styles from '../styles/HeaderStyles';
import { useSpace } from '../context/SpaceContext';
import Animated, { Easing, withTiming } from 'react-native-reanimated';

export default function Header({ type = 'main' }) {
  const { selectedSpace, setSelectedSpace, spaces } = useSpace();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(spaces.map(space => ({ label: space, value: space })));

  const rotate = withTiming(open ? '180deg' : '0deg', {
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  });

  return (
<View style={styles.header}>
  <View style={styles.left}>
    <DropDownPicker
      open={open}
      value={selectedSpace}
      items={items}
      setOpen={setOpen}
      setValue={setSelectedSpace}
      setItems={setItems}
      placeholder="Selecciona un espacio"
      style={styles.dropdown}
      dropDownContainerStyle={styles.dropdownContainer}
      textStyle={styles.dropdownText}
      listItemLabelStyle={styles.listItemLabel}
      listItemContainerStyle={styles.listItem}
      selectedItemContainerStyle={styles.selectedItem}
      TickIconComponent={() => (
        <Animated.View style={ styles.tickIcon }>
          <Ionicons name="checkmark" size={20} color="#fff" />
        </Animated.View>
      )}
      ArrowUpIconComponent={() => (
        <Animated.View style={ styles.arrowIcon }>
          <Feather name="chevron-up" size={25} color="#fff" strokeWidth={2.5} />
        </Animated.View>
      )}
      ArrowDownIconComponent={() => (
        <Animated.View style={ styles.arrowIcon }>
          <Feather name="chevron-down" size={25} color="#fff" strokeWidth={2.5} />
        </Animated.View>
      )}
    />
  </View>

  <View style={styles.actions}>
    {type === 'main' && (
      <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Agregar espacio')}>
        <Feather name="plus" size={25} color="#fff" />
      </TouchableOpacity>
    )}
    {type === 'section' && (
      <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Configuración')}>
        <Ionicons name="settings-outline" size={25} color="#fff" />
      </TouchableOpacity>
    )}
    <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Notificaciones')}>
      <Ionicons name="notifications-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
</View>
  );
};