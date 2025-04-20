import styles from '../../styles/add-space/AddAnimalScreenStyles.js';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import SectionHeader from '../../components/SectionHeader.jsx';
import SelectModal from '../../components/modals/SelectModal.jsx';
import CountSelector from '../../components/CountSelector.jsx';

export default function AddAnimalScreen() {
  const [animal, setAnimal] = useState(null);
  const [breed, setBreed] = useState(null);
  const [count, setCount] = useState(1);

  const [showAnimalModal, setShowAnimalModal] = useState(false);
  const [showBreedModal, setShowBreedModal] = useState(false);
  
  const animalOptions = [
    { label: 'Gallo', value: 'gallo' },
    { label: 'Gallina', value: 'gallina' },
    { label: 'Pollito', value: 'pollito' },
  ];

  const breedOptions = [
    { label: 'Común', value: 'comun' },
    { label: 'Pita Pinta', value: 'pita-pinta' },
  ];

  return (
    <View style={styles.container}>
      <SectionHeader sectionTitle="Añadir animal" />
        
      <Text style={styles.label}>Animal</Text>
      <TouchableOpacity onPress={() => setShowAnimalModal(true)} style={styles.selector}>
        <Text style={animal ? styles.selectorText : styles.placeholder}>
          {animal ? animalOptions.find(opt => opt.value === animal)?.label : 'Selecciona un animal'}
        </Text>
      </TouchableOpacity>
      <SelectModal
        visible={showAnimalModal}
        onClose={() => setShowAnimalModal(false)}
        onSelect={setAnimal}
        options={animalOptions}
        title="Selecciona un animal"
      />

      <Text style={styles.label}>Raza</Text>
      <TouchableOpacity onPress={() => setShowBreedModal(true)} style={styles.selector}>
        <Text style={breed ? styles.selectorText : styles.placeholder}>
          {breed ? breedOptions.find(opt => opt.value === breed)?.label : 'Selecciona una raza'}
        </Text>
      </TouchableOpacity>
      <SelectModal
        visible={showBreedModal}
        onClose={() => setShowBreedModal(false)}
        onSelect={setBreed}
        options={breedOptions}
        title="Selecciona una raza"
      />

      <Text style={styles.label}>Cantidad</Text>
      <CountSelector count={count} setCount={setCount} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log({ animal, breed, quantity })}
        disabled={!animal || !breed}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}