import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { 
        padding: 20, 
        flex: 1, 
        backgroundColor: '#fff' 
    },

    label: { 
        fontSize: 16, 
        fontWeight: '600', 
        marginBottom: 8, 
        marginTop: 20 
    },

    selector: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
    },

    selectorText: {
        fontSize: 16,
        color: '#333',
    },

    placeholder: {
        fontSize: 16,
        color: '#aaa',
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },

    counterButton: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 20,
    },

    counterText: { 
        fontSize: 20, 
        fontWeight: 'bold' 
    },

    quantity: { 
        fontSize: 18, 
        fontWeight: '600' 
    },

    button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 100,
    },

    buttonText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
});