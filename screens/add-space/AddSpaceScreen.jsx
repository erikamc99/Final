import styles from '../../styles/add-space/AddSpaceScreenStyles.js';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SectionHeader from '../../components/SectionHeader.jsx';
import SelectModal from '../../components/modals/SelectModal.jsx';

export default function AddSpaceScreen() {
  const navigation = useNavigation();

  const [spaceName, setSpaceName] = useState('');
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [showTypeModal, setShowTypeModal] = useState(false);

  const spaceTypes = [
    { label: 'Granja', value: 'granja' },
    { label: 'Corral', value: 'corral' },
    { label: 'Huerto', value: 'huerto' },
  ];

  const [error, setError] = useState({ name: '', type: '' });

  const validateAndProceed = () => {
    const newError = { name: '', type: '' };

    if (!spaceName.trim()) newError.name = 'El nombre es obligatorio';
    if (!type) newError.type = 'Selecciona un tipo de espacio';

    setError(newError);

    if (!newError.name && !newError.type) {
      navigation.navigate('NuevoAnimal');
    }
  };  

  return (
    <View style={styles.screen}>
        
        <SectionHeader sectionTitle="Añadir espacio" />
        <View style={styles.container}>
        <Text style={styles.label}>Intruduzca el nombre de su espacio:</Text>
        <TextInput style={styles.input} placeholder="Ej: Corral de Moreda" value={spaceName} 
            onChangeText={(text) => {
            setSpaceName(text);
            setError({ ...error, name: '' });
            }} />  
            
            {error.name ? <Text style={styles.error}>{error.name}</Text> : null}

        <Text style={styles.label}>Seleccione el tipo:</Text>
        <TouchableOpacity onPress={() => setShowTypeModal(true)} style={styles.selector}>
            <Text style={type ? styles.selectorText : styles.placeholder}>
                {type ? spaceTypes.find((i) => i.value === type)?.label : 'Tipo de espacio'}
            </Text>
        </TouchableOpacity>

        <SelectModal
        visible={showTypeModal}
        onClose={() => setShowTypeModal(false)}
        onSelect={setType}
        options={spaceTypes}
        title="Seleccione un tipo"
        />
    </View>

      <TouchableOpacity style={styles.button} onPress={validateAndProceed}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}