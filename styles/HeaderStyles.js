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
    left: {
      flex: 1,
    },
    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
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
      borderRadius: 0,
      elevation: 0,
      shadowColor: 'transparent',
      flex: 1,
      zIndex: 1000,
      color: '#fff',
      width: '50%',
    },
    
    dropdownContainer: {
      width: '100vw',
      left: '-15px',
      top: '60px',
      borderWidth: 0,
      backgroundColor: '#4CAF50',
      elevation: 0,
      shadowColor: 'transparent',
      zIndex: 1000,
    },
    
    dropdownText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    listItemLabel: {
      fontSize: 18,
      fontWeight: 'regular',
      paddingLeft: '15px',
    },
    listItem: {
      height: '7vh',
      borderTopWidth: 0.75,
      borderTopColor: '#2E7D32',
    },
    selectedItem: {
      backgroundColor: '#388E3C',
    },
    arrowIcon: { 
      tintColor: '#fff', 
      marginTop: '5px',
    },
    tickIcon: {
      tintColor: '#fff',
      paddingRight: '10px',
    },
  });