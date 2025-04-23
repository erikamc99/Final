import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 60,
        height: 60,
    },
    count: {
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 12,
        flex: 1,
    },
    totalBreedCount: {
        fontSize: 16,
    },
    dropdownButton: {
        padding: 4,
    },
    breedList: {
        marginTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 15,
        alignItems: 'start',
    },
    breedRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        paddingVertical: 4,
    },
    breedName: {
        fontSize: 16,
        color: '#444',
    },
    editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start',
    },
    counterContainer: {
        flexDirection: 'column',
        alignItems: 'end',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    downContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 5,
    },
    breedCount: {
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 8,
    },
    editIcon: {
        fontSize: 20,
        color: '#888',
    },
    counterIcons: {
        fontSize: 24,
        color: '#888',
    },
    deleteIcon: {
        fontSize: 22,
        marginLeft: 5,
        color: 'red',
    },
    saveIcon: {
        fontSize: 28,
        marginLeft: 5,
        color: 'green',
    },
});