import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/components/CountSelectorStyles';

export default function CountSelector({ count, setCount }) {
  const decrease = () => count > 0 && setCount(count - 1);
  const increase = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease} style={styles.button}>
        <Feather name="minus" size={20} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={increase} style={styles.button}>
        <Feather name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
