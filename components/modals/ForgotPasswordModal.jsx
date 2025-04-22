import { useState } from 'react';
import { Modal, View, Text, TextInput } from 'react-native';
import FormButton from '../FormButton';
import styles from '../../styles/components/modals/ForgotPasswordModalStyles';

export default function ForgotPasswordModal({ visible, onClose, onSend }) {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (email) {
      onSend(email);
      setEmail('');
      onClose(); 
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Recuperar contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
            <FormButton onPress={handleSend} text="ENVIAR" />
          
        </View>
      </View>
    </Modal>
  );
}