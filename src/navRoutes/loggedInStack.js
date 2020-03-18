import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

export function LoggedInStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name= "Home" component={Home}/>
        </Stack.Navigator>
    )
}