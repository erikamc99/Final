import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    header: {
      height: height * 0.15,
      backgroundColor: '#4CAF50',
      paddingTop: 55,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 10,
    },
    left: {
      flex: 1,
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
      boxShadowColor: 'transparent',
      zIndex: 1000,
      color: '#fff',
      width: 170,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    
    dropdownContainer: {
      width: width,
      left: -15,
      top: height * 0.072,
      borderWidth: 0,
      backgroundColor: '#4CAF50',
      elevation: 0,
      boxShadowColor: 'transparent',
    },
    
    dropdownText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 22,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      flexShrink: 1,
    },
    
    listItemLabel: {
      fontSize: 18,
      fontWeight: 'regular',
    },

    listItem: {
      height: height * 0.1,
    },

    selectedItem: {
      backgroundColor: '#388E3C',    
    },

    arrowIcon: { 
      tintColor: '#fff', 
    },

    tickIcon: {
      tintColor: '#fff',
      paddingRight: '10px',
    },
  });