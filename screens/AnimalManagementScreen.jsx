import { View, ScrollView } from 'react-native';
import SectionHeader from '../components/SectionHeader';
import AnimalCard from '../components/cards/AnimalCard';

export default function AnimalManagementScreen() {
  const gallinas = [
    { name: 'Común', count: 4 },
    { name: 'Pita', count: 3 },
  ];
  const gallos = [
    { name: 'Común', count: 2 },
  ];
  const pollitos = [
    { name: 'Pita', count: 6 },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SectionHeader title="Gestión de animales" />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <AnimalCard
          icon={require('../assets/img/gallina-icon.png')}
          count={7}
          breeds={gallinas}
          onToggleDropdown={() => console.log('Abrir gallinas')}
        />
        <AnimalCard
          icon={require('../assets/img/gallo-icon.png')}
          count={2}
          breeds={gallos}
          onToggleDropdown={() => console.log('Abrir gallos')}
        />
        <AnimalCard
          icon={require('../assets/img/pollito-icon.png')}
          count={6}
          breeds={pollitos}
          onToggleDropdown={() => console.log('Abrir pollitos')}
        />
      </ScrollView>
    </View>
  );
}
