import React from 'react';
import {
    SafeAreaView
} from 'react-native';
import styles from './styles';
import { Text } from 'react-native-paper';

export default function PrivateMessage() {

    return (
        <SafeAreaView
            style={styles.container}>
            <Text style={{textAlign: 'center'}}>No contents. This page will be hidden from recording anyway</Text>
        </SafeAreaView>
    );
}