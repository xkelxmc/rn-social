import React from "react";
import {ScrollView, View, Text, StyleSheet, Button} from "react-native";
import {login, logout, signUp, logoutAll} from "../store/user/actions";
import {userReducer} from "../store/user/reducer";
import {useDispatch, useSelector} from "react-redux";

export const LoginScreen = ({navigation}) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const resetHandler = () => {
        dispatch(userReducer.actions.reset());
    };
    const signUpHandler = () => {
        dispatch(userReducer.actions.reset());
        dispatch(signUp({
            email: "test2@test.ru",
            password: "test",
            name: "Test",
            lastName: "LastName"
        }));
    };
    const loginHandler = () => {
        dispatch(userReducer.actions.reset());
        dispatch(login({
            email: "test@test.ru",
            password: "test",
        }));
    };
    const logoutHandler = () => {
        dispatch(logout());
    };
    const logoutAllHandler = () => {
        dispatch(logoutAll());
    };
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text>{JSON.stringify(user)}</Text>
                <Button onPress={() => navigation.navigate("SignInScreen")} title={"Регистрация"} />
                <Button onPress={resetHandler} title={"Сброс"} />
                <Button onPress={signUpHandler} title={"Тест Регистрации"} />
                <Button onPress={loginHandler} title={"Тест Входа"} />
                <Button onPress={logoutHandler} title={"Тест Выход"} />
                <Button onPress={logoutAllHandler} title={"Тест Выход везде"} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
