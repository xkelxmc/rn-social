import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen';
import { screenOptions } from './screeenOptions';
import { NewPostScreen } from '../screens/NewPostScreen';

const ProfileStack = createStackNavigator();

export const ProfileNavigation = () => {
    return (
        <ProfileStack.Navigator
            screenOptions={screenOptions}
            initialRouteName={'ProfileScreen'}
        >
            <ProfileStack.Screen
                name={'ProfileScreen'}
                component={ProfileScreen}
                options={{
                    title: 'Мой профиль',
                    headerLeft: null,
                }}
            />
            <ProfileStack.Screen
                name={'NewPostScreen'}
                component={NewPostScreen}
                options={{
                    title: 'Создать новый пост',
                }}
            />
        </ProfileStack.Navigator>
    );
};
