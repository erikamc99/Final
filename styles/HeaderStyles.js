import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
      backgroundColor: '#4CAF50',
      paddingTop: 50,
      paddingBottom: 10,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      marginLeft: 15,
    },
    dropdown: {
        backgroundColor: '#4CAF50',
        borderWidth: 0,
        zIndex: 1000,
      },
      dropdownContainer: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        zIndex: 1000,
      },
      dropdownText: {
        color: '#000',
        fontWeight: 'bold',
      },      
  });