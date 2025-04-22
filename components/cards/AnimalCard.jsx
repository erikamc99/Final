import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/components/cards/AnimalCardStyles';

export default function AnimalCard({ icon, count, breeds, onToggleDropdown }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topRow}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.count}>{count}</Text>
      </View>

      <View style={styles.breedList}>
        {breeds.map((b, i) => (
          <View key={i} style={styles.breedRow}>
            <Text style={styles.breedCount}>{b.count} razas</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.dropdownButton} onPress={onToggleDropdown}>
        <Ionicons name="chevron-down-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
