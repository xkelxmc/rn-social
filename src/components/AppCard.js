import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AppCard = ({ item }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
            <View>
                <Text>{item.upvoters.length}</Text>
                <Text>{item.downvoters.length}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FAFAFA',
        marginBottom: 16,
        borderRadius: 2,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 24,
        lineHeight: 24,
        color: 'rgba(0, 0, 0, 0.87)',
        marginBottom: 8,
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.87)',
    },
});
