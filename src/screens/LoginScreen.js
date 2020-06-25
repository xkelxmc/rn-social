import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/user/actions';
import { AppLoader } from '../components/AppLoader';
import { userReducer } from '../store/user/reducer';
import { AppButton } from '../components/AppButton';

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(userReducer.actions.reset());
        dispatch(login({ email, password }));
    };

    if (user.isLoading) {
        return <AppLoader />;
    }

    return (
        <View style={styles.root}>
            {/*<Text>{JSON.stringify(user)}</Text>*/}
            <View style={styles.container}>
                <TextInput
                    style={styles.inputText}
                    placeholder={'Email'}
                    placeholderTextColor={'rgba(0,0,0,0.54)'}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'email-address'}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder={'Пароль'}
                    placeholderTextColor={'rgba(0,0,0,0.54)'}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <AppButton onPress={handleLogin} title={'Войти'} />
                <AppButton
                    onPress={() => navigation.navigate('SignUpScreen')}
                    title={'Регистрация'}
                />
                <AppButton
                    onPress={() => navigation.navigate('TestScreen')}
                    title={'test'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        borderBottomColor: 'rgba(0, 0, 0, 0.42)',
        borderBottomWidth: 1,
        height: 48,
        marginBottom: 16,
        width: '100%',
    },
    container: {
        width: 200,
    },
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
});
