import React, { useEffect } from 'react';
import {
    View
} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../helpers/context';

function Login({ navigation }) {

    const { signIn } = React.useContext(AuthContext);

    useEffect(()=>{
        // navigation.navigate('Register')
        // setTimeout(()=>signIn('fsd'), 1000);
    })

    return (
        <View style={{ backgroundColor: 'green', flex: 1 }}>
            
        </View>
    );

}

export default Login;