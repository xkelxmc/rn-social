import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, Button, Alert} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../store/user/actions";
import {AppLoader} from "../components/AppLoader";
import {userReducer} from "../store/user/reducer";

const initialUser = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: ""
};

export const SignUpScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState(initialUser);
    const user = useSelector(state => state.user.reducer);
    const dispatch = useDispatch();
    const handleSignUp = () => {
        if(userInfo.password === userInfo.confirmPassword) {
            dispatch(userReducer.actions.reset());
            dispatch(signUp({
                email: userInfo.email,
                name: userInfo.name,
                lastName: userInfo.lastName,
                password: userInfo.password,
            }));
        } else {
            Alert.alert("Ошибка", "Пароли не совпадают");
        }
    };
    const handleChangeUser = (field) => (text) => {
        setUserInfo(prev => ({...prev, [field]: text}));
    };

    if(user.isLoading) {
        return (
            <AppLoader/>
        );
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                {/*<Text>{JSON.stringify(user)}</Text>*/}
                <View style={styles.textWrapper}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Имя"}
                        value={userInfo.name}
                        onChangeText={handleChangeUser("name")}
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Фамилия"}
                        value={userInfo.lastName}
                        onChangeText={handleChangeUser("lastName")}
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Email"}
                        value={userInfo.email}
                        onChangeText={handleChangeUser("email")}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        keyboardType={"email-address"}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Пароль"}
                        value={userInfo.password}
                        onChangeText={handleChangeUser("password")}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Повторите пароль"}
                        value={userInfo.confirmPassword}
                        onChangeText={handleChangeUser("confirmPassword")}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>
                <Button onPress={handleSignUp} title={"Регистрация"} />
                <Button onPress={() => navigation.navigate("LoginScreen")} title={"Войти"} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    inputText: {
        width: "80%",
        borderBottomWidth: 2,
        borderBottomColor: "#cccccc",
        height: 55,
        marginBottom: 16,
    },
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textWrapper: {
        width: "100%",
        alignItems: "center",
    },
});
