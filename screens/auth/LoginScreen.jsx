import styles from '../../styles/auth/LoginScreenStyles';
import LoginForm from '../../components/LoginForm'
import { View, Image } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/logo-alargado.png')} style={styles.logo} />
            <LoginForm />
        </View>
    )
}