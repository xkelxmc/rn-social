import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const UsersScreen = () => {
    return (
        <View style={styles.root}>
            <Text>UsersScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
