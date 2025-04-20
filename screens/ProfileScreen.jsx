import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/ProfileScreenStyles';
import { useUser } from '../context/UserContext'; 
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import ConfirmModal from '../components/ConfirmModal';

export default function ProfileScreen() {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

  const handleChange = (key, value) => {
    setEditableUser({ ...editableUser, [key]: value });
  }

  const toggleEdit = () => {
    if (isEditing) {
      setUser(editableUser);
      // AÑADIR PETICIÓN A BACK
      console.log('Datos enviados a back', editableUser);
    }
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    // AÑADIR logout y navegación a Welcome
    // setIsLoggedIn(false);
  }

  const confirmLogout = () => {
    setShowConfirmLogout(false);
    console.log('¿Quieres cerrar sesión?');
  }

  return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={
            user.avatarUrl ? { uri: user.avatarUrl } : require('../assets/img/default-avatar.png')
          } style={styles.avatar} />
        </View>

        {['username', 'name', 'email', 'password'].map((key) => (
          <View key={key} style={styles.fieldContainer}>
            <TextInput
              style={[styles.input, !isEditing && styles.disabled]}
              value={editableUser[key]}
              onChangeText={(text) => handleChange(key, text)}
              editable={isEditing}
              secureTextEntry={key === 'password' && !showPassword}
              placeholder={labelize(key)}
            />
            {key === 'password' && isEditing && (
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                  <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="#666" />
                </TouchableOpacity>
            )}            
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={toggleEdit}>
          <Text style={styles.buttonText}>{isEditing ? 'Guardar' : 'Editar'}</Text>
        </TouchableOpacity>
        
        <View  style={styles.logoutContainer}>
        {!isEditing ? (
          <TouchableOpacity onPress={() => setShowConfirmLogout(true)}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        ) : (
          <Text style={[styles.logoutText, { color: 'transparent' }]}>Cerrar sesión</Text>
        )}
        </View>
        <ConfirmModal
          visible={showConfirmLogout}
          onClose={() => setShowConfirmLogout(false)}
          onConfirm={confirmLogout}
          message="¿Estás seguro de que quieres cerrar sesión?"
        />
      </View>
  );
}


const labelize = (key) => {
  switch (key) {
    case 'username': return 'Usuario';
    case 'name': return 'Nombre';
    case 'email': return 'Email';
    case 'password': return 'Contraseña';
    default: return key;
  }
};