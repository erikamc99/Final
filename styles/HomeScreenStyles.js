import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cardLarge: {
    padding: 25,
    backgroundColor: '#f6f6f6',
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  cardSmall: {
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    flex: 1,
    },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardIcon: {
    width: 30,
    height: 30,
  },
  satisfactionContainer: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 10,
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
});