import { View, Text, StyleSheet } from 'react-native';

export default function StatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estadísticas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 18,
  }
});