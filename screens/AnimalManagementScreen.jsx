import { ScrollView } from 'react-native';
import AnimalCard from '../components/cards/AnimalCard';

export default function AnimalManagementScreen() {
  const [expandedType, setExpandedType] = useState(null);

  const animalTypes = [
    {
      key: 'gallina',
      icon: require('../assets/img/gallina-icon.png'),
      count: 24,
      breeds: [
        { name: 'Leghorn', count: 10 },
        { name: 'Rhode Island', count: 14 },
      ],
    },
    {
      key: 'pollito',
      icon: require('../assets/img/pollito-icon.png'),
      count: 12,
      breeds: [
        { name: 'Amarillo', count: 5 },
        { name: 'Marrón', count: 7 },
      ],
    },
    {
      key: 'gallo',
      icon: require('../assets/img/gallo-icon.png'),
      count: 8,
      breeds: [
        { name: 'Fénix', count: 4 },
        { name: 'Andaluz', count: 4 },
      ],
    },
  ];

  return (
    <ScrollView style={styles.screenContainer} >
      <SectionHeader sectionTitle="Gestión de Animales" />
      {animalTypes.map((type) => (
        <AnimalCard
          key={type.key}
          icon={type.icon}
          count={type.count}
          breeds={type.breeds}
          isExpanded={expandedType === type.key}
          onToggle={() =>
            setExpandedType(expandedType === type.key ? null : type.key)
          }
        />
      ))}
    </ScrollView>
  );
}