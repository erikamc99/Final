import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
    color: '#333',
  },
  barWrapper: {
    height: 30,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  barFill: {
    backgroundColor: '#4CAF50',
    height: '100%',
    borderRadius: 10,
  },
  percentageText: {
    backgroundColor: 'transparent',
    fontSize: 12,
    position: 'absolute',
    transform: [{ translateX: '50%' }, { translateY: '50%' }],
    zIndex: 1,
  },
});