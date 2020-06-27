import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../store/users/actions';
import { AppLoader } from '../components/AppLoader';
import { UserBadge } from '../components/UserBadge';

export const UsersScreen = ({ navigation }) => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAll());
    }, []);
    const gotToUser = (user) => () => {
        navigation.navigate('UserScreen', user);
    };
    return (
        <View style={styles.root}>
            {users.isLoading ? (
                <AppLoader />
            ) : (
                <FlatList
                    data={users.list}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.userItem}
                            onPress={gotToUser(item)}
                        >
                            <UserBadge user={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item._id}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    userItem: {
        marginBottom: 12,
    },
});
