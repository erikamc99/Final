import styles from '../styles/components/LoginFormStyles'
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import FormButton from './FormButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
  
    const handleLogin = () => {
      // Login
      console.log('Iniciar sesión con:', username, password);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
  
        <TextInput
          placeholder="Usuario"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
  
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <ForgotPasswordModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSend={(email) => {
            console.log('Enviar email para recuperar:', email);
            // FUNCIÓN ENVIAR MAIL
        }}
        />
  
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.linkText}>¿Ha olvidado su contraseña?</Text>
        </TouchableOpacity>

        <FormButton onPress={handleLogin} text="INICIAR SESIÓN" />

        <View style={styles.loginPrompt}>
            <Text>¿Aún no se ha registrado?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.loginLink}>Regístrese</Text>
            </TouchableOpacity>
        </View>
        </View>
  );
}