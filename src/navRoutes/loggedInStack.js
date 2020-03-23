import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeTab } from './tab';
import ChatDetail from '../screens/chatDetail/ChatDetail';

const Stack = createStackNavigator();

export function LoggedInStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerTintColor: 'black' }}
        >
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTab} />
            <Stack.Screen
                options={({ route }) => ({ headerBackTitleVisible: false, title: route.params.name })}
                name="ChatDetail"
                initialParams={{ id: '0', name: '', image: '' }}
                component={ChatDetail} />
        </Stack.Navigator>
    )
}