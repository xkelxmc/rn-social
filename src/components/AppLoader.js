import React from "react";
import {View, StyleSheet, ActivityIndicator} from "react-native";

export const AppLoader = () => (
    <View style={styles.root}>
        <ActivityIndicator color={"#2C98F0"} size={40}/>
    </View>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});