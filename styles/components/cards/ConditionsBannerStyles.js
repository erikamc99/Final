import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    marginTop: 10,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 65,
    height: 65,
    marginLeft: -18,
  },
  temperature: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  right: {
    flex: 1,
    marginLeft: 20,
  },
  satisfaction: {
    fontSize: 18,
    color: '#2E7D32',
    textAlign: 'right',
    fontWeight: '600',
  },
});