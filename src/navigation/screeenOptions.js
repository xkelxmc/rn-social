import { Platform } from 'react-native';

export const screenOptions = {
    gestureEnabled: false,
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#2F80ED' : '#F7F7F7',
    },
    headerTintColor: Platform.OS === 'android' ? '#ffffff' : undefined,
};
