import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  barBackground: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 10,
  },
  fill: {
    height: '100%',
    borderRadius: 10,
  },
  indicator: {
    position: 'absolute',
    top: -5,
    transform: [{ translateX: -12 }],
  },
  icon: {
    width: 24,
    height: 24,
  },
});
