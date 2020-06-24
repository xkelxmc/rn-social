import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import {LoginScreen} from "./src/screens/LoginScreen";
import {ProfileScreen} from "./src/screens/ProfileScreen";
import {SignInScreen} from "./src/screens/SignInScreen";
import {UserScreen} from "./src/screens/UserScreen";
import {UsersScreen} from "./src/screens/UsersScreen";
import {store} from "./src/store";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"LoginScreen"} component={LoginScreen}/>
                    <Stack.Screen name={"ProfileScreen"} component={ProfileScreen}/>
                    <Stack.Screen name={"SignInScreen"} component={SignInScreen}/>
                    <Stack.Screen name={"UserScreen"} component={UserScreen}/>
                    <Stack.Screen name={"UsersScreen"} component={UsersScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
