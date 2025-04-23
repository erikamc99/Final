import { View, Text } from 'react-native';
import styles from '../styles/TemporallyScreens'
import HelpModal from '../components/modals/HelpModal.jsx';
import useHelp from '../hooks/useHelp.js';

export default function StatScreen() {
    const {
      visible,
      currentText,
      isLast,
      onNext,
      onSkip,
      triggerManually
    } = useHelp(('Estadísticas'));
  return (
    <View style={{ flex: 1, zIndex: 0 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Estadísticas</Text>
      </View>
      <HelpModal visible={visible} text={currentText} isLast={isLast} onNext={onNext} onSkip={onSkip} />
    </View>
  );
}