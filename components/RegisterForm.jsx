import styles from '../styles/components/RegisterFormStyles'
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import FormButton from './FormButton';
import { useNavigation } from '@react-navigation/native';

export default function RegisterForm() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    // Registro
    console.log({ username, email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <FormButton onPress={handleRegister} text="REGISTRARSE" />

      <View style={styles.loginPrompt}>
        <Text>¿Ya está registrado? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Inicie sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}