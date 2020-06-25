import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../store/user/actions';
import { AppLoader } from '../components/AppLoader';
import { userReducer } from '../store/user/reducer';
import { AppButton } from '../components/AppButton';

const initialUser = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    lastName: '',
};

export const SignUpScreen = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState(initialUser);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleSignUp = () => {
        if (userInfo.password === userInfo.confirmPassword) {
            dispatch(userReducer.actions.reset());
            dispatch(
                signUp({
                    email: userInfo.email,
                    name: userInfo.name,
                    lastName: userInfo.lastName,
                    password: userInfo.password,
                })
            );
        } else {
            Alert.alert('Ошибка', 'Пароли не совпадают');
        }
    };
    const handleChangeUser = (field) => (text) => {
        setUserInfo((prev) => ({ ...prev, [field]: text }));
    };

    if (user.isLoading) {
        return <AppLoader />;
    }

    return (
        <View style={styles.root}>
            {/*<Text>{JSON.stringify(user)}</Text>*/}
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Имя'}
                        placeholderTextColor={'rgba(0,0,0,0.54)'}
                        value={userInfo.name}
                        onChangeText={handleChangeUser('name')}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Фамилия'}
                        placeholderTextColor={'rgba(0,0,0,0.54)'}
                        value={userInfo.lastName}
                        onChangeText={handleChangeUser('lastName')}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(0,0,0,0.54)'}
                        value={userInfo.email}
                        onChangeText={handleChangeUser('email')}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType={'email-address'}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Пароль'}
                        placeholderTextColor={'rgba(0,0,0,0.54)'}
                        value={userInfo.password}
                        onChangeText={handleChangeUser('password')}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Повторите пароль'}
                        placeholderTextColor={'rgba(0,0,0,0.54)'}
                        value={userInfo.confirmPassword}
                        onChangeText={handleChangeUser('confirmPassword')}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                    <AppButton onPress={handleSignUp} title={'Регистрация'} />
                    <AppButton
                        onPress={() => navigation.navigate('LoginScreen')}
                        title={'Войти'}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        borderBottomColor: 'rgba(0, 0, 0, 0.42)',
        borderBottomWidth: 1,
        height: 55,
        marginBottom: 16,
        width: '100%',
    },
    root: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    container: {
        width: 200,
    },
});
