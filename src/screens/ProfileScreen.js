import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppButton } from '../components/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/user/actions';
import { AppLoader } from '../components/AppLoader';

export const ProfileScreen = ({ navigation }) => {
    const user = useSelector((state) => state.user);
    const currentUser = user.user;
    useEffect(() => {
        navigation.setOptions({
            title: `${currentUser.name} ${currentUser.lastName}`,
        });
        return () => {
            navigation.setOptions({
                title: `Мой профиль`,
            });
        };
    }, []);

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };

    if (user.isLoading) {
        return <AppLoader />;
    }
    return (
        <View style={styles.root}>
            <Text>ProfileScreen</Text>
            <AppButton onPress={logoutHandler} title={'Выход'} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
