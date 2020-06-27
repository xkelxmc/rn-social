import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { screenOptions } from './screeenOptions';
import { Ionicons } from '@expo/vector-icons';
import { Platform, AsyncStorage } from 'react-native';
import { ProfileNavigation } from './ProfileNavigation';
import { UsersNavigation } from './UserNavigation';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { TestScreen } from '../screens/TestScreen';
import { getCurrentUser, restoreToken } from '../store/user/actions';

const Stack = createStackNavigator();
const Tab =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator()
        : createBottomTabNavigator();

export const Navigation = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
                dispatch(restoreToken(userToken));
            } catch (e) {
                // Restoring token failed
            }
        };

        bootstrapAsync();
    }, []);
    const user = useSelector((state) => state.user);
    useEffect(() => {
        if (!user.user && user.token) {
            dispatch(getCurrentUser());
        }
    }, [user.token, user.user]);
    if (!user.token || !user.user) {
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
