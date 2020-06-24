import React, {useState} from "react";
import {ScrollView, View, StyleSheet, Button, TextInput, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/user/actions";
import {AppLoader} from "../components/AppLoader";
import {userReducer} from "../store/user/reducer";

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(state => state.user.reducer);
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(userReducer.actions.reset());
        dispatch(login({email, password}));
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
                        placeholder={"Email"}
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        keyboardType={"email-address"}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Пароль"}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>
                <Button onPress={handleLogin} title={"Войти"} />
                <Button onPress={() => navigation.navigate("SignUpScreen")} title={"Регистрация"} />
                <Button onPress={() => navigation.navigate("TestScreen")} title={"test"} />
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
    }
});
