import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const AppCard = ({ item, like, disLike }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
            <View style={styles.likesWrapper}>
                <View style={styles.likeItem}>
                    <TouchableOpacity onPress={like}>
                        <Ionicons
                            name="md-thumbs-up"
                            size={24}
                            color={'#666666'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.likeCount}>{item.upvoters.length}</Text>
                </View>
                <View style={styles.likeItem}>
                    <TouchableOpacity onPress={disLike}>
                        <Ionicons
                            name="md-thumbs-down"
                            size={24}
                            color={'#666666'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.likeCount}>
                        {item.downvoters.length}
                    </Text>
                </View>
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
    likesWrapper: {
        paddingTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
    },
    likeCount: {
        marginLeft: 8,
    },
});
