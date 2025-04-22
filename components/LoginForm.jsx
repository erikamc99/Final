import styles from '../styles/components/LoginFormStyles'
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import FormButton from './FormButton';
import ForgotPasswordModal from './modals/ForgotPasswordModal';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
    const { user, setIsLoggedIn } = useUser();
    const navigation = useNavigation();
  
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      const match =
        (input === user.username || input === user.email) &&
        password === user.password;
  
      if (match) {
        setIsLoggedIn(true);
      } else {
        setError('Credenciales incorrectas');
      }
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

        {error ? <Text>{error}</Text> : null}
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