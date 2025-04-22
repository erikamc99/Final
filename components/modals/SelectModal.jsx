import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../styles/components/modals/SelectModalStyles';

export default function SelectModal({ visible, onClose, onSelect, options, title }) {
  return (
    <Modal transparent visible={visible} >
      <View style={styles.overlay} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onSelect(item.value);
                  onClose();
                }}
              >
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}