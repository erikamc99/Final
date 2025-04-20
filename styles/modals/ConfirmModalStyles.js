import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
      },
      message: {
        fontSize: 18,
        marginBottom: 20,
        marginTop: 5,
        textAlign: 'center',
      },
      actions: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
      },
      button: {
        padding: 5,
      },
      cancel: {
        fontSize: 16,
        color: '#666',
      },
      confirm: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#016216',
      },
});