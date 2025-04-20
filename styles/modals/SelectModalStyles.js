import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modal: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '50%',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
      },
      option: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      },
      optionText: {
        fontSize: 16,
      },
      cancelButton: {
        marginTop: 15,
        alignItems: 'center',
      },
      cancelText: {
        color: '#007BFF',
        fontSize: 16,
        fontWeight: '500',
      },
});