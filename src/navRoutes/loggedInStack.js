import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeTab } from './tab';

const Stack = createStackNavigator();

export function LoggedInStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTab} />
        </Stack.Navigator>
    )
}