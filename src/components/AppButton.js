import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export const AppButton = ({ title, style, onPress, ...other }) => {
    return (
        <View style={{ ...styles.root, ...style }}>
            <Button title={title} onPress={onPress} {...other} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginBottom: 8,
    },
});
