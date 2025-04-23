import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/components/cards/AnimalCardStyles";
import { useState } from "react";

export default function AnimalCard({ icon, count, breeds, totalBreeds, isExpanded, onToggle }) {
  
  const [editIndex, setEditIndex] = useState(null);
  const [localBreeds, setLocalBreeds] = useState([...breeds]);

  const handleIncrement = (index) => {
    const updated = [...localBreeds];
    updated[index].count += 1;
    setLocalBreeds(updated);
  };

  const handleDecrement = (index) => {
    const updated = [...localBreeds];
    if (updated[index].count > 0) updated[index].count -= 1;
    setLocalBreeds(updated);
  };

  const handleSave = () => {
    // FUNCIÓN GUARDAR EN BACK
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...localBreeds];
    updated.splice(index, 1); 
    setLocalBreeds(updated);
    setEditIndex(null);
  };
  
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topRow}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.count}>{count}</Text>
        <View style={styles.rightRow}>
          <Text style={styles.totalBreedCount}>{totalBreeds} Especies</Text>
          <TouchableOpacity onPress={onToggle}>
            <Ionicons
              name={isExpanded ? "chevron-up-outline" : "chevron-down-outline"}
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {isExpanded && (
        <View style={styles.breedList}>
          {localBreeds.map((b, i) => (
            <View key={i} style={styles.breedRow}>
              <Text style={styles.breedName}>{b.name}</Text>

              <View style={styles.editContainer}>
                {editIndex === i ? (
                  <View style={styles.counterContainer}>
                    <View style={styles.topContainer} >
                    <TouchableOpacity onPress={() => handleDecrement(i)}>
                      <Ionicons name="remove" style={styles.counterIcons} />
                    </TouchableOpacity>
                    <Text style={styles.breedCount}>{b.count}</Text>
                    <TouchableOpacity onPress={() => handleIncrement(i)}>
                      <Ionicons name="add" style={styles.counterIcons} />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.downContainer}>
                      <TouchableOpacity onPress={handleDelete}>
                        <Ionicons name="trash-outline" style={styles.deleteIcon} />
                      </TouchableOpacity> 
                      <TouchableOpacity onPress={handleSave}>
                        <Ionicons name="checkmark" style={styles.saveIcon} />
                      </TouchableOpacity> 
                    </View>                 
                  </View>
                ) : (
                  <>
                    <Text style={styles.breedCount}>{b.count}</Text>
                    <TouchableOpacity onPress={() => setEditIndex(i)}>
                      <Ionicons name="create-outline" style={styles.editIcon} />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}