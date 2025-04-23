import styles from '../../styles/add-space/AddAnimalScreenStyles.js';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import SectionHeader from '../../components/SectionHeader.jsx';
import SelectModal from '../../components/modals/SelectModal.jsx';
import CountSelector from '../../components/CountSelector.jsx';
import { useRoute, useNavigation } from '@react-navigation/native';
import useHelp from '../../hooks/useHelp.js';
import HelpModal from '../../components/modals/HelpModal.jsx';

export default function AddAnimalScreen() {
  const [animal, setAnimal] = useState(null);
  const [breed, setBreed] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  const [showAnimalModal, setShowAnimalModal] = useState(false);
  const [showBreedModal, setShowBreedModal] = useState(false);
  
  // Borrar cuando se conecte a back
  const animalOptions = [
    { label: 'Gallo', value: 'gallo' },
    { label: 'Gallina', value: 'gallina' },
    { label: 'Pollito', value: 'pollito' },
  ];
  
  const breedOptions = [
    { label: 'Común', value: 'comun' },
    { label: 'Pita Pinta', value: 'pita-pinta' },
  ];
  
  const route = useRoute();
  const navigation = useNavigation();
  
  const { spaceName, type } = route.params || {};

    const {
      visible,
      currentText,
      isLast,
      onNext,
      onSkip,
      triggerManually
    } = useHelp(('AñadirAnimal'));

  return (
    <View style={styles.container}>
      <SectionHeader sectionTitle="Añadir animal" />
        
      <Text style={styles.label}>Animal</Text>
      <TouchableOpacity onPress={() => setShowAnimalModal(true)} style={styles.selector}>
        <Text style={animal ? styles.selectorText : styles.placeholder}>
          {animal ? animalOptions.find(opt => opt.value === animal)?.label : 'Seleccione un animal'}
        </Text>
      </TouchableOpacity>
      <SelectModal
        visible={showAnimalModal}
        onClose={() => setShowAnimalModal(false)}
        onSelect={setAnimal}
        options={animalOptions}
        title="Seleccione un animal"
      />

      <Text style={styles.label}>Raza</Text>
      <TouchableOpacity onPress={() => setShowBreedModal(true)} style={styles.selector}>
        <Text style={breed ? styles.selectorText : styles.placeholder}>
          {breed ? breedOptions.find(opt => opt.value === breed)?.label : 'Seleccione una raza'}
        </Text>
      </TouchableOpacity>
      <SelectModal
        visible={showBreedModal}
        onClose={() => setShowBreedModal(false)}
        onSelect={setBreed}
        options={breedOptions}
        title="Seleccione una raza"
      />

      <Text style={styles.label}>Cantidad</Text>
      <CountSelector count={quantity} setCount={setQuantity} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => { //Cambiar console.log por función a back
        const data = {
          space: {
            name: spaceName,
            type: type,
          },
          animal: {
            type: animal,
            breed,
            quantity,
          },
        };

        console.log('Datos completos:', data);
        navigation.popToTop();
      }}
      disabled={!animal || !breed} >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      <HelpModal visible={visible} text={currentText} isLast={isLast} onNext={onNext} onSkip={onSkip} />
    </View>
  );
}