import styles from '../../styles/auth/RegisterScreenStyles';
import RegisterForm from '../../components/RegisterForm'
import { View, Image } from 'react-native';

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/logo-alargado.png')} style={styles.logo} />
            <RegisterForm />
        </View>
    )
}