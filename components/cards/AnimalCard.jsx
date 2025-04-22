import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/components/cards/AnimalCardStyles";

export default function AnimalCard({ icon, count, breeds, isExpanded, onToggle, }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topRow}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={onToggle}>
          <Ionicons
            name={isExpanded ? "chevron-up-outline" : "chevron-down-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {isExpanded && (
        <View style={styles.breedList}>
          {breeds.map((b, i) => (
            <View key={i} style={styles.breedRow}>
              <Text style={styles.breedName}>{b.name}</Text>
              <Text style={styles.breedCount}>{b.count}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
