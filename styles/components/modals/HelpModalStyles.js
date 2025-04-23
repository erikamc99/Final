import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modal: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  contentText: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'end',
  },
  skipText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#888',
    marginRight: 15,
    marginTop: 15,
  },
  nextButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  nextText: {
    color: 'white',
    fontWeight: 'bold',
  },
});