import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSelector } from 'react-redux';
import { screenOptions } from './screeenOptions';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { ProfileNavigation } from './ProfileNavigation';
import { UsersNavigation } from './UserNavigation';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { TestScreen } from '../screens/TestScreen';

const Stack = createStackNavigator();
const Tab =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator()
        : createBottomTabNavigator();

export const Navigation = () => {
    const user = useSelector((state) => state.user);
    if (!user.token) {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={screenOptions}
                    initialRouteName={'LoginScreen'}
                >
                    <Stack.Screen
                        name={'LoginScreen'}
                        component={LoginScreen}
                        options={{
                            title: 'Вход',
                            headerLeft: null,
                        }}
                    />
                    <Stack.Screen
                        name={'SignUpScreen'}
                        component={SignUpScreen}
                        options={{
                            title: 'Регистрация',
                            headerLeft: null,
                        }}
                    />
                    <Stack.Screen name={'TestScreen'} component={TestScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Profile'}
                tabBarOptions={{
                    activeTintColor: '#2C98F0',
                    inactiveTintColor: 'gray',
                }}
                shifting={true}
                activeColor={'#FFFFFF'}
                inactiveColor={'rgba(255,255,255,0.65)'}
                barStyle={{ backgroundColor: '#2C98F0' }}
            >
                <Tab.Screen
                    name={'Profile'}
                    component={ProfileNavigation}
                    options={{
                        tabBarLabel: 'Мой профиль',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={
                                    Platform.OS === 'android'
                                        ? 'md-person'
                                        : 'ios-person'
                                }
                                color={color}
                                size={focused ? 24 : 18}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={'Users'}
                    component={UsersNavigation}
                    options={{
                        tabBarLabel: 'Пользователи',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={
                                    Platform.OS === 'android'
                                        ? 'md-people'
                                        : 'ios-people'
                                }
                                color={color}
                                size={focused ? 24 : 18}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
