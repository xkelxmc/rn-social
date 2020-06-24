import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import {LoginScreen} from "./src/screens/LoginScreen";
import {ProfileScreen} from "./src/screens/ProfileScreen";
import {SignUpScreen} from "./src/screens/SignUpScreen";
import {UserScreen} from "./src/screens/UserScreen";
import {UsersScreen} from "./src/screens/UsersScreen";
import {TestScreen} from "./src/screens/TestScreen";
import {store} from "./src/store";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"LoginScreen"} component={LoginScreen}/>
                    <Stack.Screen name={"TestScreen"} component={TestScreen}/>
                    <Stack.Screen name={"ProfileScreen"} component={ProfileScreen}/>
                    <Stack.Screen name={"SignUpScreen"} component={SignUpScreen}/>
                    <Stack.Screen name={"UserScreen"} component={UserScreen}/>
                    <Stack.Screen name={"UsersScreen"} component={UsersScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
