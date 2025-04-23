import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  axisText: {
    fontSize: 12,
    color: '#666',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  colorBox: {
    width: 14,
    height: 14,
    marginRight: 6,
    borderRadius: 3,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
});