import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    animalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    animalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animalImage: {
        width: 60,
        height: 60,
    },
    animalCount: {
        fontSize: 80,
        fontWeight: '300',
        color: '#000',
    },
    animalSmallItem: {
        alignItems: 'center',
        justifyContent: 'center',
        },
    animalSmallImage: {
        width: 40,
        height: 40,
    },
    animalSmallCount: {
        fontSize: 30,
        color: '#000',
    },
});
