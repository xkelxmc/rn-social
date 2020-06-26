import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const UserBadge = ({ user }) => {
    const label = (user.name[0] + user.lastName[0]).toLocaleUpperCase();
    return (
        <View style={styles.root}>
            <View style={styles.avatarWrapper}>
                <Text style={styles.avatarText}>{label}</Text>
            </View>
            <View style={styles.userName}>
                <Text>
                    {user.name} {user.lastName}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        width: 40,
        height: 40,
        backgroundColor: '#2C98F0',
        marginRight: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 40,
    },
    userName: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
    },
});
