import styles from '../styles/components/FormButtonStyles'
import { TouchableOpacity, Text } from 'react-native';

export default function FormButton({ onPress, text, style = {} }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}