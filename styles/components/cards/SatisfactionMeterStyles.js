import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f6f6f6',
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    padding: 10,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  section: {
    flex: 1,
    height: 20,

  },
  cornerLeftSection: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 20,

  },
  cornerRightSection: {
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 20,

  },
});
