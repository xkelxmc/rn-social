import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import {
    login,
    logout,
    signUp,
    logoutAll,
    getCurrentUser,
} from '../store/user/actions';
import { userReducer } from '../store/user/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from '../components/AppButton';

export const TestScreen = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const resetHandler = () => {
        dispatch(userReducer.actions.reset());
    };
    const getCurrentUserHandler = () => {
        dispatch(getCurrentUser());
    };
    const signUpHandler = () => {
        dispatch(userReducer.actions.reset());
        dispatch(
            signUp({
                email: 'test20@test.ru',
                password: 'test',
                name: 'Test',
                lastName: 'LastName',
            })
        );
    };
    const loginHandler = () => {
        dispatch(userReducer.actions.reset());
        dispatch(
            login({
                email: 'test@test.ru',
                password: 'test',
            })
        );
    };
    const logoutHandler = () => {
        dispatch(logout());
    };
    const logoutAllHandler = () => {
        dispatch(logoutAll());
    };
    return (
        <View style={styles.root}>
            <AppButton onPress={resetHandler} title={'Сброс'} />
            <AppButton
                onPress={getCurrentUserHandler}
                title={'Тест Получение пользователя'}
            />
            <AppButton onPress={signUpHandler} title={'Тест Регистрации'} />
            <AppButton onPress={loginHandler} title={'Тест Входа'} />
            <AppButton onPress={logoutHandler} title={'Тест Выход'} />
            <AppButton onPress={logoutAllHandler} title={'Тест Выход везде'} />
            <View style={{ height: 200 }}>
                <ScrollView>
                    <Text>{JSON.stringify(user)}</Text>
                </ScrollView>
            </View>
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
