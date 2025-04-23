import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  circleWrapper: {
    width: 80,
    height: 200,
    borderWidth: 2,
    borderColor: '#D1D1D1',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  circle: {
    width: '100%',
    backgroundColor: '#4CAF50',
    position: 'absolute',
    bottom: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  percentageText: {
    position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    top: 100,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: '#000',
  },
});