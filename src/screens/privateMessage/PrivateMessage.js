import React, { useEffect } from 'react';
import {
    SafeAreaView
} from 'react-native';
import styles from './styles';
import { Text } from 'react-native-paper';
import { occludeSensitiveScreen } from '../../helpers/uxcamHelper';

export default function PrivateMessage() {


    useEffect(() => {
        occludeSensitiveScreen(true);
        return () => {
            occludeSensitiveScreen(false);
        }
    }, [])

    return (
        <SafeAreaView
            style={styles.container}>
            <Text style={{ textAlign: 'center' }}>No contents. This page will be hidden from recording anyway</Text>
        </SafeAreaView>
    );
}