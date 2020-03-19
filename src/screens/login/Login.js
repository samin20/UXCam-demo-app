import React, { useEffect } from 'react';
import {
    View
} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../helpers/context';
import Logo from '../../components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';

function Login({ navigation }) {

    const { signIn } = React.useContext(AuthContext);

    useEffect(()=>{
        // navigation.navigate('Register')
        // setTimeout(()=>signIn('fsd'), 1000);
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Logo/>
        </SafeAreaView>
    );

}

export default Login;