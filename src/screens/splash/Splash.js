import React from 'react';
import {
    View,
    Image
} from 'react-native';
import styles from './styles';

const Splash = () => {
    return (
        <View style={{ backgroundColor: 'cyan', flex: 1 }}>
            <Image
                style={styles.image}
                source={require('../../assets/splash.jpg')} />
        </View>
    );
}

export default Splash;