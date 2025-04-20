import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f6f6f6',
        flex: 1,
      },

      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 60,
      },

      backButton: {
        marginRight: 8,
      },

      headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
    
      card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
      },

      alertIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginRight: 12,
      },

      textContainer: {
        flex: 1,
      },

      notificationTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#222',
      },

      message: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
      },

      time: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 4,
      },

      typeIcon: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
        marginLeft: 12,
      },
    });