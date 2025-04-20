import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1, 
        backgroundColor: '#fff',
        padding: 20,
    },

    container: {
        flex: 1,
    },

    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },

    input: {
        borderHorizontalWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#016216',
        padding: 12,
        marginBottom: 15,
    },

    selector: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
    },

    selectorText: {
    },

    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 200,
        marginLeft: '50%',
        width: '45%',
        alignSelf: 'end',
    },

    buttonText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold' 
    },

    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
    },
});