import styles from '../styles/components/SectionHeaderStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import HelpModal from './modals/HelpModal';
import useHelp from '../hooks/useHelp';
import { helpMessages } from '../constants/helpMessages';

export default function SectionHeader({ sectionTitle, onHelpPress }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer} >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{sectionTitle}</Text>
      </View>
      <View style={styles.rightContainer} >
  
          <TouchableOpacity onPress={onHelpPress}>
            <Ionicons name="help-circle-outline" style={styles.helpIcon} />
          </TouchableOpacity>
        
      </View>
    </View>
  );
}