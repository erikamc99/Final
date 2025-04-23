import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },

  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#ccc',
  },

  fieldContainer: {
    margin: 10,
  },
  
  input: {
    borderBottomWidth: 1,
    borderColor: '#016216',
    paddingVertical: 8,
    fontSize: 18,
  },

  disabled: {
    color: '#3b5b43e0',
  },

  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '25%',
  },

  button: {
    width: 200,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 40,
    alignSelf: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  logoutContainer: {
    alignItems: 'center',
  },
  
  logoutText: {
    color: '#005012',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});