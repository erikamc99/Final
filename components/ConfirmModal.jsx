import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ConfirmModalStyles.js';

export default function ConfirmModal({ visible, onClose, onConfirm, message }) {
    return (
        <Modal transparent visible={visible} 
        animationType="fade"
        onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
                <View style={styles.actions}>
                    <TouchableOpacity onPress={onClose} style={styles.button}>
                        <Text style={styles.cancel}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onConfirm} style={styles.button}>
                        <Text style={styles.confirm}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
    );
}