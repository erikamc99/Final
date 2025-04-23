import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useUser } from '../context/UserContext'; 

export default function RootNavigator() {
    const { isLoggedIn } = useUser();

    return (
/*         <NavigationContainer>
        {isLoggedIn ? (
            <MainNavigator />
        ) : (
            <AuthNavigator />
        )}
        </NavigationContainer> */
        <NavigationContainer>

            <MainNavigator />
        </NavigationContainer> 
    );
}
