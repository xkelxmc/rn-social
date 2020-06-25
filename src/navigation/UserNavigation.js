import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserScreen } from '../screens/UserScreen';
import { UsersScreen } from '../screens/UsersScreen';
import { screenOptions } from './screeenOptions';

const UsersStack = createStackNavigator();

export const UsersNavigation = () => {
    return (
        <UsersStack.Navigator
            screenOptions={screenOptions}
            initialRouteName={'UsersScreen'}
        >
            <UsersStack.Screen
                name={'UsersScreen'}
                component={UsersScreen}
                options={{
                    title: 'Список пользователей',
                    headerLeft: null,
                }}
            />
            <UsersStack.Screen
                name={'UserScreen'}
                component={UserScreen}
                options={{
                    title: 'Профиль пользователя',
                    headerLeft: null,
                }}
            />
        </UsersStack.Navigator>
    );
};
