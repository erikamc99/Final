import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
},
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  axisText: {
    fontSize: 12,
    color: '#666',
  },
  legend: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  colorBox: {
    width: 14,
    height: 14,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    fontSize: 13,
    color: '#444',
  },
});