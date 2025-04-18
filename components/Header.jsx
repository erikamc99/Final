import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {  Ionicons, Feather } from '@expo/vector-icons';
import styles from '../styles/HeaderStyles';


export default function Header({ type = 'main', title = 'MyFarm', spaces = ['MyFarm', 'MyFarm2'] }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(title);
  const [items, setItems] = useState(
    spaces.map(space => ({ label: space, value: space }))
  );

  return (
    <View style={styles.header}>
      <View style={styles.titleWrapper}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(val) => console.log('Espacio seleccionado:', val)}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          showArrowIcon={true}
          placeholder="Selecciona un espacio"
        />
      </View>

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
  );
}
