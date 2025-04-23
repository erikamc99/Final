import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    container: {
        padding: 20,
        backgroundColor: '#FAFAFA',
      },
      titleSection: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333',
      },
      axisText: {
        color: '#666',
        fontSize: 12,
      },
      
    helpButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        position: 'absolute',
        top: -15,
        right: -15,
    },
    helpIcon: {
        fontSize: 24,
        color: '#333',
    },
})