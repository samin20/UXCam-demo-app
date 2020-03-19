import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../helpers/context';
import Logo from '../../components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Caption, Button, Text } from 'react-native-paper';
import { commonStyles } from '../commonStyles';
import { MyColors } from '../../config/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Login({ navigation }) {

    const { signIn } = React.useContext(AuthContext);

    const [inputValues, setInputValues] = useState({
        email: '', password: ''
    });

    const handleOnChange = (key, value) => {
        setInputValues({ ...inputValues, [key]: value });
    };


    useEffect(() => {
        // setTimeout(()=>signIn('fsd'), 1000);
    })

    function login() {
        Keyboard.dismiss();
        console.log(inputValues)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: MyColors.defaultBackground }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={-250}
                    behavior="position"
                    enabled
                    style={{ padding: 20, flex: 1 }}>
                    <Logo />
                    <Caption>Enter your login info</Caption>
                    <TextInput
                        autoCapitalize="none"
                        theme={{
                            roundness: 20,
                            colors: {
                                placeholder: MyColors.lightGray
                            }
                        }}
                        mode="outlined"
                        style={commonStyles.textInput}
                        label='Email'
                        value={inputValues.email}
                        onChangeText={text => handleOnChange('email', text)}
                    />
                    <TextInput
                        autoCapitalize="none"
                        theme={{
                            roundness: 20,
                            colors: {
                                placeholder: MyColors.lightGray
                            }
                        }}
                        secureTextEntry={true}
                        mode="outlined"
                        style={commonStyles.textInput}
                        label='Password'
                        value={inputValues.password}
                        value={inputValues.password}
                        onChangeText={text => handleOnChange('password', text)}
                    />
                    <Button
                        theme={{ roundness: 20 }}
                        style={{ marginTop: 30 }}
                        mode="contained"
                        onPress={login}>
                        Login
                    </Button>
                    <View style={styles.bottomContainer}>
                        <Caption>Don't have an account?</Caption>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signup}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );

}

export default Login;