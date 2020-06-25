import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const UserScreen = () => {
    return (
        <View style={styles.root}>
            <Text>UserScreen</Text>
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
