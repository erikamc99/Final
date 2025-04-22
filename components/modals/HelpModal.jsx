import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/components/modals/HelpModalStyles';

export default function HelpModal({ visible, text, isLast, onNext, onSkip }) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.contentText}>{text}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onSkip}>
              <Text style={styles.skipText}>Saltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onNext} style={styles.nextButton}>
              <Text style={styles.nextText}>{isLast ? 'Aceptar' : 'Siguiente'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}