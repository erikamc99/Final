import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    container: {
        padding: 20,
        backgroundColor: '#fff',
      },
      sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
      },
      cardList: {
        flexDirection: 'row',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
      },
      title: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: '600',
        color: '#000',
      },
      resourcesRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 15,
      },
      helpButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        position: 'absolute',
        top: -15,
        right: -15,
      },
      helpIcon: {
        fontSize: 22,
        color: '#333',
      },
})